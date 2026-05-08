"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserCampaignsSchema = exports.UpdateUserSchema = exports.CreateUserSchema = void 0;
const zod_1 = require("zod");
const db_models_1 = require("@org/db-models");
exports.CreateUserSchema = zod_1.z.object({
    name: zod_1.z.string().min(2, 'Name must be at least 2 characters'),
    password: zod_1.z.string().min(6, 'Password must be at least 6 characters'),
    role: zod_1.z.enum(db_models_1.UserRole),
    teamId: zod_1.z.string().optional(),
});
exports.UpdateUserSchema = zod_1.z.object({
    name: zod_1.z.string().min(2).optional(),
    password: zod_1.z.string().min(6).optional(),
    role: zod_1.z.enum(db_models_1.UserRole).optional(),
    teamId: zod_1.z.string().optional(),
});
exports.UpdateUserCampaignsSchema = zod_1.z.object({
    campaigns: zod_1.z.array(zod_1.z.string()).min(1),
    remove: zod_1.z.boolean(),
});
//# sourceMappingURL=user.dto.js.map