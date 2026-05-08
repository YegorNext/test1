"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DomainController = void 0;
const domain_dto_1 = require("../dto/domain.dto");
const domain_service_1 = require("../services/domain.service");
const DomainNameFilter_1 = require("../services/components/DomainNameFilter");
class DomainController {
    static async getAll(req, res) {
        const domains = await domain_service_1.domainService.getAll(req.user.userId, req.user.role);
        res.status(200).json(domains);
    }
    //should be changed or removed
    static async update(req, res) {
        const parse = domain_dto_1.UpdateDomainSchema.safeParse(req.body);
        if (!parse.success)
            return res.status(400).json(parse.error);
        const domain = await domain_service_1.domainService.updateDomain(req.params.id, parse.data);
        res.json(domain);
    }
    // should be removed
    static async validateDomain(req, res) {
        let { domainName, domains } = req.body;
        let list = [];
        if (typeof domainName === 'string') {
            list = [domainName];
        }
        else if (Array.isArray(domains)) {
            list = domains;
        }
        else {
            return res.status(400).json({
                error: 'Provide domain or domains array',
            });
        }
        const results = list.map((domain) => ({
            domain,
            isValid: DomainNameFilter_1.domainNameFilter.validate(domain),
        }));
        return res.json({ results });
    }
    static async deploy(req, res) {
        const parse = domain_dto_1.DeploySiteSchema.safeParse(req.body);
        if (!parse.success)
            return res.status(400).json(parse.error);
        const result = await domain_service_1.domainService.deploy(req.params.id, parse.data);
        if (!result)
            return res.status(404).json({ message: `Domain not found` });
        res.json({ message: result.message, success: result.success });
    }
    static async checkSSL(req, res) {
        const hasSSL = await domain_service_1.domainService.checkSSL(req.params.id);
        if (hasSSL === null)
            return res.status(404).json({ message: `Domain not found` });
        res.json({ ssl: hasSSL });
    }
    static async installSSL(req, res) {
        const result = await domain_service_1.domainService.installSSL(req.params.id);
        if (!result)
            return res.status(404).json({ message: `Domain not found` });
        res.json({ message: result.message, success: result.success });
    }
}
exports.DomainController = DomainController;
//# sourceMappingURL=domain.controller.js.map