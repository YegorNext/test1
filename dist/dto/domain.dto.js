"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeploySiteSchema = exports.UpdateDomainSchema = exports.CreateDomainsSchema = void 0;
const zod_1 = require("zod");
const shared_1 = require("../utils/types/shared");
exports.CreateDomainsSchema = zod_1.z.object({
    domains: zod_1.z.array(zod_1.z.string()).min(1),
    price: zod_1.z.number(),
});
exports.UpdateDomainSchema = zod_1.z
    .object({
    price: zod_1.z.number().optional(),
    hasSSL: zod_1.z.boolean().optional(),
    campaign: zod_1.z.string().optional(),
})
    .refine((data) => Object.values(data).some((v) => v !== undefined), {
    message: 'At least one field must be provided',
});
exports.DeploySiteSchema = zod_1.z.object({
    archivePath: zod_1.z.string(),
    cloack: zod_1.z.enum(shared_1.CloackType),
    userId: zod_1.z.string(),
    campaign: zod_1.z.string(),
    allowedCountries: zod_1.z.array(zod_1.z.string().length(2)).min(1),
    allowedOS: zod_1.z.record(zod_1.z.string(), zod_1.z.boolean()).optional(),
});
//# sourceMappingURL=domain.dto.js.map