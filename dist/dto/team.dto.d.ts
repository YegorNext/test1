import { z } from 'zod';
export declare const CreateTeamSchema: z.ZodObject<{
    name: z.ZodString;
    alias: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type CreateTeamDto = z.infer<typeof CreateTeamSchema>;
export declare const UpdateTeamSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    alias: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type UpdateTeamDto = z.infer<typeof UpdateTeamSchema>;
export declare const UpdateTeamMembersSchema: z.ZodObject<{
    memberIds: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
export type UpdateTeamMembersDto = z.infer<typeof UpdateTeamMembersSchema>;
//# sourceMappingURL=team.dto.d.ts.map