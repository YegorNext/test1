"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.siteService = exports.SiteService = void 0;
const axios_1 = __importDefault(require("axios"));
const helpers_1 = require("../utils/helpers/helpers");
class SiteService {
    async createSite(serverId, domain) {
        const url = `${process.env.FORGE_API_URL}/api/v1/servers/${serverId}/sites`;
        const data = {
            domain: domain,
            project_type: 'php',
            aliases: [],
            directory: '/public',
            isolated: true,
            username: 'forge',
            php_version: 'php84', //php83
        };
        try {
            const response = await axios_1.default.post(url, data, {
                headers: (0, helpers_1.getForgeHeaders)(),
            });
            return response.data;
        }
        catch (error) {
            throw new Error(this.errorMessage(error));
        }
    }
    async deleteSite(serverId, siteId) {
        const url = `${process.env.FORGE_API_URL}/api/v1/servers/${serverId}/sites/${siteId}`;
        try {
            await axios_1.default.delete(url, {
                headers: (0, helpers_1.getForgeHeaders)(),
            });
        }
        catch (error) {
            throw new Error(this.errorMessage(error));
        }
    }
    async updateNginxConfig(serverId, siteId, domain) {
        const url = `${process.env.FORGE_API_URL}/api/v1/servers/${serverId}/sites/${siteId}/nginx`;
        try {
            await axios_1.default.put(url, {
                content: await (0, helpers_1.buildNginxConfig)(domain),
            }, { headers: (0, helpers_1.getForgeHeaders)() });
        }
        catch (error) {
            throw new Error(this.errorMessage(error));
        }
    }
    async checkSSL(serverId, siteId) {
        const url = `${process.env.FORGE_API_URL}/api/v1/servers/${serverId}/sites/${siteId}/certificates`;
        try {
            return await axios_1.default.get(url, { headers: (0, helpers_1.getForgeHeaders)() });
        }
        catch (error) {
            throw new Error(this.errorMessage(error));
        }
    }
    async installSSL(serverId, siteId, domain) {
        const url = `${process.env.FORGE_API_URL}/api/v1/servers/${serverId}/sites/${siteId}/certificates/letsencrypt`;
        try {
            await axios_1.default.post(url, {
                domains: [`${domain}`, `www.${domain}`],
            }, { headers: (0, helpers_1.getForgeHeaders)() });
        }
        catch (error) {
            throw new Error(this.errorMessage(error));
        }
    }
    async createDeploymentKey(serverId, siteId) {
        const url = `${process.env.FORGE_API_URL}/api/v1/servers/${serverId}/sites/${siteId}/deploy-key`;
        try {
            const response = await axios_1.default.post(url, {}, { headers: (0, helpers_1.getForgeHeaders)() });
            return response.data;
        }
        catch (error) {
            throw new Error(this.errorMessage(error));
        }
    }
    async setDeploymentSettings(serverId, siteId, domain) {
        const url = `${process.env.FORGE_API_URL}/api/v1/servers/${serverId}/sites/${siteId}/git`;
        try {
            const response = await axios_1.default.post(url, {
                provider: 'github',
                repository: `${process.env.GIT_HUB_ORG}/${domain}`,
                branch: 'main',
                composer: false,
            }, { headers: (0, helpers_1.getForgeHeaders)() });
            return response.data;
        }
        catch (error) {
            throw new Error(this.errorMessage(error));
        }
    }
    async enableDeployment(serverId, siteId) {
        const url = `${process.env.FORGE_API_URL}/api/v1/servers/${serverId}/sites/${siteId}/deployment`;
        try {
            const response = await axios_1.default.post(url, {}, { headers: (0, helpers_1.getForgeHeaders)() });
            return response.data;
        }
        catch (error) {
            throw new Error(this.errorMessage(error));
        }
    }
    errorMessage(error) {
        if (axios_1.default.isAxiosError(error)) {
            const data = error.response?.data;
            const response = typeof data === 'string' ? data : (data?.message ?? data);
            const details = typeof response === 'string' ? response : JSON.stringify(response);
            return `Forge API request failed (${error.response?.status}): ${details}`;
        }
        if (error instanceof Error) {
            return `Forge API request failed: ${error.message}`;
        }
        return `Forge API request failed: ${String(error)}`;
    }
}
exports.SiteService = SiteService;
exports.siteService = new SiteService();
//# sourceMappingURL=site.service.js.map