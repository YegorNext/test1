"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTeamMembersSchema = exports.UpdateTeamSchema = exports.CreateTeamSchema = void 0;
const zod_1 = require("zod");
exports.CreateTeamSchema = zod_1.z.object({
    name: zod_1.z.string().min(3, 'Name must be at least 3 characters'),
    alias: zod_1.z.string().optional(),
});
exports.UpdateTeamSchema = zod_1.z
    .object({
    name: zod_1.z.string().min(3).optional(),
    alias: zod_1.z.string().optional(),
})
    .refine((data) => data.name !== undefined || data.alias !== undefined, {
    message: 'At least one of "name" or "alias" must be provided',
});
exports.UpdateTeamMembersSchema = zod_1.z.object({
    memberIds: zod_1.z.array(zod_1.z.string()).min(1),
});
//# sourceMappingURL=team.dto.js.map