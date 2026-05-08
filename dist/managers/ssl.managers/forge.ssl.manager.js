"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForgeSSLManager = void 0;
const site_service_1 = require("../../services/site.service");
class ForgeSSLManager {
    async checkSSL(serverId, siteId) {
        const result = await this.check(serverId, siteId);
        if (result.data && result.data.certificates.length > 0) {
            const { active, status } = result.data.certificates[0];
            return active === true && status === 'installed';
        }
        return false;
    }
    async installSSL(serverId, siteId, siteName) {
        const result = await this.check(serverId, siteId);
        if (result.data && result.data.certificates.length > 0) {
            const { active, status, activation_status } = result.data.certificates[0];
            if (active === true || status === 'installing' || activation_status === 'activating')
                return false;
        }
        await site_service_1.siteService.installSSL(serverId, siteId, siteName);
        return true;
    }
    async check(serverId, siteId) {
        return await site_service_1.siteService.checkSSL(serverId, siteId);
    }
}
exports.ForgeSSLManager = ForgeSSLManager;
//# sourceMappingURL=forge.ssl.manager.js.map