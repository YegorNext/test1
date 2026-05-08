"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PalladiumManager = void 0;
const path_1 = __importDefault(require("path"));
const promises_1 = __importDefault(require("fs/promises"));
class PalladiumManager {
    async createContent(config) {
        console.info(`Creating cloacking content...`);
        const templatePath = path_1.default.join(__dirname, '../../templates/cloacks/palladium', this.getFileName(config.team, config.user));
        let template;
        try {
            template = await promises_1.default.readFile(templatePath, 'utf8');
        }
        catch (err) {
            throw new Error(`Template not found or file can't be read: ${templatePath}`);
        }
        const { alias, user, campaign, allowedCountries, allowedOS } = config;
        const replacements = {
            alias,
            user,
            campaign,
            allowedCountries: JSON.stringify(allowedCountries.map((c) => c.toUpperCase())),
            allowedOS: JSON.stringify(allowedOS),
        };
        return template.replace(/\{\{(\w+)\}\}/g, (_, key) => {
            return replacements[key] ?? '';
        });
    }
    getFileName(team, user) {
        switch (team.toLowerCase()) {
            case 'zavod lidov':
                if (user.toLowerCase() === 'avi')
                    return 'palladium[avi].php';
                else
                    return 'palladium[zavod].php';
            default:
                return 'palladium[karma].php';
        }
    }
}
exports.PalladiumManager = PalladiumManager;
//# sourceMappingURL=palladium.manager.js.map