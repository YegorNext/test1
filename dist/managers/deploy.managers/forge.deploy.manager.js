"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForgeDeployManager = void 0;
const site_service_1 = require("../../services/site.service");
const repo_service_1 = require("../../services/repo.service");
const archive_manager_provider_1 = require("../../providers/archive.manager.provider");
const constants_1 = require("../../utils/constants/constants");
class ForgeDeployManager {
    async deploy(target) {
        const domain = target.domain;
        if (domain.campaign === '') {
            console.info(`Site ${domain.name} has no campaign. Prepare site to deploy`);
            // 1. Create deploy key for the site
            const { key } = await site_service_1.siteService.createDeploymentKey(domain.serverId, domain.id);
            // 2. Set deploy key to repo
            await repo_service_1.repoService.setDeploymentKey(domain.name, key);
            // 3. Set deployment settings for the site
            await site_service_1.siteService.setDeploymentSettings(domain.serverId, domain.id, domain.name);
            // 4. Enable deployment for the site
            await site_service_1.siteService.enableDeployment(domain.serverId, domain.id);
            //5. Update nginx config
            await site_service_1.siteService.updateNginxConfig(domain.serverId, domain.id, domain.name);
        }
        console.info(`Start preparing archive files...`);
        const tree = [];
        const archiveManager = archive_manager_provider_1.ArchiveManagerProvider.getArchiveManager(constants_1.ARCHIVE_PROVIDER);
        if (archiveManager) {
            //6. Prepare archive files to commit
            await archiveManager.prepareArchiveFiles(tree, {
                archivePath: target.archivePath,
                domainName: domain.name,
                cloack: target.cloack,
                alias: target.alias,
                user: target.user,
                team: target.team,
                campaign: target.campaign,
                allowedCountries: target.allowedCountries,
                allowedOS: target.allowedOS,
            });
            console.info(`Archive files prepared`);
        }
        else
            return { message: `Archive files was not prepared`, success: false };
        if (tree.length > 0) {
            //7. Commit
            await repo_service_1.repoService.commit(domain.name, tree);
            console.info(`Deploy completed`);
            return { message: `Deploy completed`, success: true };
        }
        console.info(`Deploy not completed`);
        return { message: `Deploy not completed`, success: false };
    }
}
exports.ForgeDeployManager = ForgeDeployManager;
//# sourceMappingURL=forge.deploy.manager.js.map