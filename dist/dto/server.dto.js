"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateServerSchema = exports.CreatServerSchema = void 0;
const zod_1 = require("zod");
exports.CreatServerSchema = zod_1.z.object({
    id: zod_1.z.string(),
    name: zod_1.z.string().min(3),
    ip: zod_1.z.ipv4(),
    rootPassword: zod_1.z.string(),
    forgePassword: zod_1.z.string(),
    price: zod_1.z.number(),
});
exports.UpdateServerSchema = zod_1.z
    .object({
    name: zod_1.z.string().min(3).optional(),
    ip: zod_1.z.ipv4().optional(),
    rootPassword: zod_1.z.string().optional(),
    forgePassword: zod_1.z.string().optional(),
    userId: zod_1.z.string().optional(),
    price: zod_1.z.number().optional(),
    active: zod_1.z.boolean().optional(),
})
    .refine((data) => Object.values(data).some((v) => v !== undefined), {
    message: 'At least one field must be provided',
});
//# sourceMappingURL=server.dto.js.map