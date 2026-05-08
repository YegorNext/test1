"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerController = void 0;
const server_dto_1 = require("../dto/server.dto");
const domain_dto_1 = require("../dto/domain.dto");
const server_service_1 = require("../services/server.service");
const forge_service_1 = require("../services/forge.service");
class ServerController {
    static async create(req, res) {
        const parse = server_dto_1.CreatServerSchema.safeParse(req.body);
        if (!parse.success)
            return res.status(400).json(parse.error);
        const server = await server_service_1.serverService.createServer(parse.data);
        res.json(server);
    }
    static async fetch(req, res) {
        const { dateFrom } = req.query;
        if (!dateFrom)
            return res.status(400).json({ message: 'Missing dateFrom query param' });
        const forgeServers = await forge_service_1.forgeService.getServers();
        const servers = await server_service_1.serverService.updateDatabase(forgeServers, dateFrom.toString());
        res.json(servers);
    }
    static async update(req, res) {
        const parse = server_dto_1.UpdateServerSchema.safeParse(req.body);
        if (!parse.success)
            return res.status(400).json(parse.error);
        const server = await server_service_1.serverService.updateServer(req.params.id, parse.data);
        if (!server)
            return res.status(404).json({ message: 'Server not found' });
        res.json(server);
    }
    static async getAll(req, res) {
        const servers = await server_service_1.serverService.getAllServers();
        res.json(servers);
    }
    static async getServer(req, res) {
        const server = await server_service_1.serverService.getServer(req.params.id);
        if (!server)
            return res.status(404).json({ message: 'Server not found' });
        res.json(server);
    }
    static async assign(req, res) {
        const server = await server_service_1.serverService.assignServer(req.params.id, req.user.userId);
        if (!server)
            return res.status(404).json({ message: 'Server not found' });
        res.json(server);
    }
    static async unassign(req, res) {
        const server = await server_service_1.serverService.unassignServer(req.params.id);
        if (!server)
            return res.status(404).json({ message: 'Server not found' });
        res.json(server);
    }
    static async deactivate(req, res) {
        const server = await server_service_1.serverService.deactivateServer(req.params.id);
        if (!server)
            return res.status(404).json({ message: 'Server not found' });
        res.json(server);
    }
    static async delete(req, res) {
        await server_service_1.serverService.deleteServer(req.params.id);
        res.json({ message: 'Server deleted' });
    }
    static async addDomains(req, res) {
        const parse = domain_dto_1.CreateDomainsSchema.safeParse(req.body);
        if (!parse.success)
            return res.status(400).json(parse.error);
        const response = await server_service_1.serverService.addDomains(req.params.id, parse.data);
        if (!response)
            return res.status(404).json({ message: 'Server not found' });
        res.json(response);
    }
    static async rebootServer(req, res) {
        await server_service_1.serverService.rebootServer(req.params.id);
        res.json({ message: `Reboot initiated` });
    }
}
exports.ServerController = ServerController;
//# sourceMappingURL=server.controller.js.map