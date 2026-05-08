"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DigitalOceanArchiveManager = void 0;
const p_limit_1 = __importDefault(require("p-limit"));
const unzipper_1 = __importDefault(require("unzipper"));
const archive_service_1 = require("../../services/archive.service");
const repo_service_1 = require("../../services/repo.service");
const cloack_manager_provider_1 = require("../../providers/cloack.manager.provider");
class DigitalOceanArchiveManager {
    limit = (0, p_limit_1.default)(5);
    async prepareArchiveFiles(tree, config) {
        console.info(`Preparing ${config.archivePath} for site ${config.domainName}...`);
        const archiveStream = await archive_service_1.archiveService.getarchiveStream(config.archivePath);
        const archiveParseStream = archiveStream.pipe(unzipper_1.default.Parse());
        const tasks = [];
        archiveParseStream.on('entry', (entry) => {
            if (entry.type !== 'File') {
                entry.autodrain();
                return;
            }
            const task = this.limit(async () => {
                const chunks = [];
                for await (const chunk of entry) {
                    chunks.push(chunk);
                }
                const buffer = Buffer.concat(chunks);
                const blob = await repo_service_1.repoService.createBlob(config.domainName, buffer);
                tree.push({
                    path: this.toPublicPath(entry.path),
                    mode: '100644',
                    type: 'blob',
                    sha: blob.data.sha,
                });
            });
            tasks.push(task);
        });
        await new Promise((resolve, reject) => {
            archiveParseStream.on('close', resolve);
            archiveParseStream.on('error', reject);
        });
        await Promise.all(tasks);
        console.info(`Preparing cloacking...`);
        let content = '';
        const cloakManager = cloack_manager_provider_1.CloackManagerProvider.getCloackManager(config.cloack);
        if (cloakManager) {
            content = await cloakManager.createContent({
                alias: config.alias,
                user: config.user,
                team: config.team,
                campaign: config.campaign,
                allowedCountries: config.allowedCountries,
                allowedOS: config.allowedOS,
            });
            console.info(`Cloacking completed`);
            const cloackBlob = await repo_service_1.repoService.createBlob(config.domainName, Buffer.from(content));
            tree.push({
                path: 'public/index.php',
                mode: '100644',
                type: 'blob',
                sha: cloackBlob.data.sha,
            });
        }
        console.info(`Archive ${config.archivePath} for site ${config.domainName} prepared`);
    }
    toPublicPath(str) {
        const clean = str.replace(/\\/g, '/');
        if (clean.includes('..'))
            throw new Error('Invalid path');
        return clean.startsWith('public/') ? clean : `public/${clean}`;
    }
}
exports.DigitalOceanArchiveManager = DigitalOceanArchiveManager;
//# sourceMappingURL=do.archive.manager.js.map