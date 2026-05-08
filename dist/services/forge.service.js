"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.forgeService = exports.ForgeService = void 0;
const axios_1 = __importDefault(require("axios"));
const helpers_1 = require("../utils/helpers/helpers");
const site_service_1 = require("./site.service");
class ForgeService {
    async deleteServer(id) {
        const url = `${process.env.FORGE_API_URL}/api/v1/servers/${id}`;
        try {
            await axios_1.default.delete(url, {
                headers: (0, helpers_1.getForgeHeaders)(),
            });
        }
        catch (error) {
            throw new Error(this.#errorMessage(error));
        }
    }
    async getServers() {
        const url = `${process.env.FORGE_API_URL}/api/v1/servers`;
        try {
            const response = await axios_1.default.get(url, {
                headers: (0, helpers_1.getForgeHeaders)(),
            });
            return response.data.servers;
        }
        catch (error) {
            throw new Error(this.#errorMessage(error));
        }
    }
    async createSite(serverId, domain) {
        const response = await site_service_1.siteService.createSite(serverId, domain);
        return String(response.site.id);
    }
    async deleteSite(serverId, siteId) {
        console.info('Deleting forge site...');
        await site_service_1.siteService.deleteSite(serverId, siteId);
        console.info(`Site ${siteId} was deleted on server ${serverId}`);
    }
    async rebootServer(id) {
        const url = `${process.env.FORGE_API_URL}/api/v1/servers/${id}/reboot`;
        try {
            await axios_1.default.post(url, {}, {
                headers: (0, helpers_1.getForgeHeaders)(),
            });
        }
        catch (error) {
            throw new Error(this.#errorMessage(error));
        }
    }
    #errorMessage(error) {
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
exports.ForgeService = ForgeService;
exports.forgeService = new ForgeService();
//# sourceMappingURL=forge.service.js.map