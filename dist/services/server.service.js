"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serverService = exports.ServerService = void 0;
const prisma_1 = require("../utils/prisma");
const db_models_1 = require("@org/db-models");
const db_models_2 = require("@org/db-models");
const forge_service_1 = require("./forge.service");
const repo_service_1 = require("./repo.service");
const domain_service_1 = require("./domain.service");
const DomainNameFilter_1 = require("./components/DomainNameFilter");
class ServerService {
    async createServer(dto) {
        console.info('Creating server....');
        const server = await prisma_1.prisma.server.create({
            data: dto,
            include: { domains: true },
        });
        console.info(`Server ${dto.id} created`);
        return this.mapServer(server);
    }
    async updateServer(id, dto) {
        console.info(`Updating server ${id}...`);
        const data = {};
        Object.entries(dto).forEach(([key, value]) => {
            if (value !== undefined)
                data[key] = value;
        });
        try {
            const server = await prisma_1.prisma.server.update({
                where: { id },
                data,
                include: { domains: true },
            });
            console.info(`Server ${id} updated`);
            return this.mapServer(server);
        }
        catch (error) {
            console.error(`Server ${id} is not updated`);
            return null;
        }
    }
    //Should be checked
    async updateDatabase(servers, after = '2026-01-01') {
        const afterDate = new Date(after);
        const addedServers = [];
        for (const server of servers) {
            const createdAtForge = new Date(server.created_at);
            if (createdAtForge > afterDate) {
                const dataForCreate = {
                    id: server.id.toString(),
                    name: server.name,
                    ip: server.ip_address,
                    rootPassword: '',
                    forgePassword: '',
                    price: 6.99,
                    createdAt: createdAtForge,
                    expiredAt: new Date(createdAtForge.getTime() + 30 * 24 * 60 * 60 * 1000),
                };
                const dataForUpdate = {
                    name: server.name,
                    ip: server.ip_address,
                    createdAt: createdAtForge,
                    expiredAt: new Date(createdAtForge.getTime() + 30 * 24 * 60 * 60 * 1000),
                };
                const newServer = await prisma_1.prisma.server.upsert({
                    where: { id: server.id.toString() },
                    update: dataForUpdate,
                    create: dataForCreate,
                });
                addedServers.push(newServer);
            }
        }
        return addedServers;
    }
    async getAllServers() {
        console.info('Getting servers...');
        const servers = await prisma_1.prisma.server.findMany({
            include: { domains: true },
        });
        return servers.map((server) => this.mapServer(server));
    }
    async getServer(id) {
        console.info(`Getting server ${id}...`);
        const server = await prisma_1.prisma.server.findUnique({
            where: { id },
            include: { domains: true },
        });
        if (!server) {
            console.info(`Server ${id} not found`);
            return null;
        }
        console.info(`Server ${id} found`);
        return this.mapServer(server);
    }
    async assignServer(id, userId) {
        console.info(`Assigning server ${id} to user ${userId}...`);
        const assignedServer = await prisma_1.prisma.$transaction(async (tx) => {
            const server = await tx.server.updateMany({
                where: { id, userId: null },
                data: { userId },
            });
            if (!server.count)
                throw new Error(`Server ${id} already assigned or not found`);
            return tx.server.findUnique({ where: { id }, include: { domains: true } });
        });
        console.info(`Server ${id} assigned to user ${userId}`);
        return assignedServer ? this.mapServer(assignedServer) : null;
    }
    async unassignServer(id) {
        console.info(`Unassigning server ${id}...`);
        const unassignedServer = await prisma_1.prisma.$transaction(async (tx) => {
            const server = await tx.server.updateMany({
                where: { id, userId: { not: null } },
                data: { userId: null },
            });
            if (!server.count)
                throw new Error(`Server ${id} is not assigned or not found`);
            return tx.server.findUnique({
                where: { id },
                include: { domains: true },
            });
        });
        console.info(`Server ${id} unassigned`);
        return unassignedServer ? this.mapServer(unassignedServer) : null;
    }
    async deactivateServer(id) {
        console.info(`Deactivating server ${id}...`);
        const server = await this.getServer(id);
        if (!server)
            return null;
        await forge_service_1.forgeService.deleteServer(id).catch((error) => {
            console.error(`Error during deleting server in forge: ${error.message}`);
        });
        await Promise.allSettled(server.domains.map((domain) => repo_service_1.repoService.deleteRepository(domain.name).catch((error) => {
            console.error(`Error during deleting repository ${domain.name}: ${error.message}`);
        })));
        const deactivatedServer = await this.updateServer(id, { active: false });
        if (deactivatedServer)
            console.info(`Server ${id} deactivated`);
        else
            console.info(`Server ${id} is not deactivated`);
        return deactivatedServer;
    }
    async deleteServer(id) {
        console.info(`Deleting server: ${id}...`);
        await prisma_1.prisma.server.delete({ where: { id } });
        console.info(`Server ${id} deleted`);
    }
    async addDomains(serverId, dto) {
        console.info(`Adding ${dto.domains.length} domains...`);
        const validDomains = [];
        const rejectedDomains = [];
        dto.domains.forEach((d) => {
            if (!DomainNameFilter_1.domainNameFilter.validate(d)) {
                rejectedDomains.push({ domain: d, reason: 'contains forbidden word' });
            }
            else {
                validDomains.push(d);
            }
        });
        if (!validDomains.length) {
            console.warn('No domains passed the forbidden words filter');
            return { created: [], rejected: rejectedDomains };
        }
        const server = await this.getServer(serverId);
        if (!server)
            return null;
        const existingNames = new Set(server.domains.map((d) => d.name));
        const newDomains = validDomains.filter((d) => !existingNames.has(d));
        validDomains.forEach((d) => {
            if (existingNames.has(d)) {
                rejectedDomains.push({ domain: d, reason: 'already exists on server' });
            }
        });
        if (!newDomains.length) {
            console.warn('All valid domains already exist on the server');
            return { created: [], rejected: rejectedDomains };
        }
        console.info('Creating site components...');
        const settled = await Promise.allSettled(newDomains.map((d) => domain_service_1.domainService.prepareDomain(d, serverId)));
        const prepared = settled
            .filter((r) => r.status === 'fulfilled')
            .map((r) => r.value);
        console.info('Creating domains...');
        const entities = await prisma_1.prisma.$transaction((tx) => Promise.all(prepared.map((p) => tx.domain.create({
            data: {
                id: p.siteId,
                name: p.domain,
                serverId,
                repoId: String(p.repo.id),
                sshUrl: p.repo.ssh_url,
                price: dto.price,
                type: 'EXTERNAL', // DEFAULT TYPE
            },
        }))));
        console.info(`${entities.length} sites created`);
        return {
            created: entities.map((entity) => new db_models_2.DomainEntity(entity)),
            rejected: rejectedDomains,
        };
    }
    async rebootServer(serverId) {
        console.info(`Initiating reboot server ${serverId}...`);
        await forge_service_1.forgeService.rebootServer(serverId);
    }
    mapServer(server) {
        return new db_models_1.ServerEntity({
            ...server,
            domains: server.domains.map((domain) => new db_models_2.DomainEntity({ ...domain })),
        });
    }
}
exports.ServerService = ServerService;
exports.serverService = new ServerService();
//# sourceMappingURL=server.service.js.map