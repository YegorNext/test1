"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.domainService = exports.DomainService = void 0;
const prisma_1 = require("../utils/prisma");
const db_models_1 = require("@org/db-models");
const repo_service_1 = require("./repo.service");
const forge_service_1 = require("./forge.service");
const user_service_1 = require("./user.service");
const ssl_manager_provider_1 = require("../providers/ssl.manager.provider");
const deploy_manager_provider_1 = require("../providers/deploy.manager.provider");
const constants_1 = require("../utils/constants/constants");
class DomainService {
    async getAll(userId, role) {
        console.info('Getting domains...');
        const isAdmin = role === db_models_1.UserRole.ADMIN;
        const domains = await prisma_1.prisma.domain.findMany({
            where: isAdmin ? {} : { server: { userId } },
        });
        return domains.map((domain) => this.mapDomain(domain));
    }
    async getDomain(id) {
        const domain = await prisma_1.prisma.domain.findUnique({
            where: { id },
            include: { server: true },
        });
        if (!domain)
            return null;
        return this.mapDomain(domain);
    }
    async updateDomain(id, dto) {
        const data = {};
        Object.entries(dto).forEach(([key, value]) => {
            if (value !== undefined)
                data[key] = value;
        });
        const updated = await prisma_1.prisma.domain.update({
            where: { id },
            data,
        });
        return this.mapDomain(updated);
    }
    async prepareDomain(domain, serverId) {
        console.info(`Preparing ${domain}...`);
        let repo = null;
        let siteId = null;
        try {
            repo = await repo_service_1.repoService.createRepository(domain);
            siteId = await forge_service_1.forgeService.createSite(serverId, domain);
            console.info(`${domain} prepared`);
            return { domain, repo, siteId };
        }
        catch (error) {
            console.error(`Prepare failed for ${domain}:`, error.message);
            if (siteId)
                await forge_service_1.forgeService.deleteSite(serverId, siteId).catch(() => { });
            if (repo)
                await repo_service_1.repoService.deleteRepository(domain).catch(() => { });
            throw error;
        }
    }
    async deploy(siteId, dto) {
        console.info(`Start deploy site: ${siteId}...`);
        const domain = await this.getDomain(siteId);
        if (!domain)
            return null;
        const user = await user_service_1.userService.getUser(dto.userId);
        if (!user)
            return { message: `User with id: ${dto.userId} not found!`, success: false };
        if (!user.team)
            return { message: `User '${user.name}' is not a member of any team`, success: false };
        if (!user.team?.alias || user.team?.alias.length == 0)
            return { message: `There is no alias in team: ${user.team.name}`, success: false };
        const deployManager = deploy_manager_provider_1.DeployManagerProvider.getDeployManager(constants_1.DEPLOY_PROVIDER);
        let message = ``;
        let success = false;
        if (deployManager) {
            const result = await deployManager.deploy({
                domain,
                archivePath: dto.archivePath,
                cloack: dto.cloack,
                alias: user.team.alias,
                user: user.name,
                team: user.team.name,
                campaign: dto.campaign,
                allowedCountries: dto.allowedCountries,
                allowedOS: dto.allowedOS ?? {},
            });
            message = result.message;
            success = result.success;
            if (success)
                await this.updateDomain(domain.id, { campaign: dto.campaign });
            console.info(message);
        }
        else {
            console.info(`Something went wrong in ${this.constructor.name}.${this.deploy.name}`);
            message = `Site ${domain.name} cannot be deployed`;
        }
        return { message, success };
    }
    async checkSSL(siteId) {
        console.info('Start check ssl certificate...');
        const domain = await this.getDomain(siteId);
        if (!domain)
            return null;
        console.info(`Site ${siteId} found`);
        if (!domain.serverId)
            throw new Error(`This domain is not associated with any server`);
        if (domain.hasSSL)
            return true;
        console.info(`Site ${siteId} doesn't have certificate`);
        const sslManager = ssl_manager_provider_1.SSLManagerProvider.getSSLManager(constants_1.SSL_PROVIDER.HTTP);
        if (sslManager) {
            const result = await sslManager.checkSSL(domain.serverId, siteId, domain.name);
            if (result) {
                console.info(`Certificate was found for ${siteId}`);
                this.updateDomain(siteId, { hasSSL: result });
            }
            else
                console.info(`Certificate was not found for ${siteId}`);
            console.info('End check ssl certificate...');
            return result;
        }
        console.info(`Something went wrong in ${this.constructor.name}.${this.checkSSL.name}`);
        return false;
    }
    async installSSL(siteId) {
        console.info('Start SSL certificate installation initiation');
        const domain = await this.getDomain(siteId);
        if (!domain)
            return null;
        console.info(`Site ${siteId} found`);
        if (!domain.serverId)
            return {
                message: `This domain is not associated with any server`,
                success: false,
            };
        if (!domain.campaign)
            return {
                message: `You can't initiate SSL cetrificate installation, please set campaign before`,
                success: false,
            };
        if (domain.hasSSL)
            return {
                message: `SSL certificate already installed`,
                success: false,
            };
        const sslManager = ssl_manager_provider_1.SSLManagerProvider.getSSLManager(constants_1.SSL_PROVIDER.FORGE);
        if (sslManager) {
            const result = await sslManager.installSSL(domain.serverId, siteId, domain.name);
            if (result)
                return { message: 'SSL certificate installation is initiated', success: true };
            else
                return { message: 'SSL certificate installation is not initiated', success: false };
        }
        return {
            message: `Something went wrong in ${this.constructor.name}.${this.installSSL.name}`,
            success: false,
        };
    }
    mapDomain(domain) {
        return new db_models_1.DomainEntity(domain);
    }
}
exports.DomainService = DomainService;
exports.domainService = new DomainService();
//# sourceMappingURL=domain.service.js.map