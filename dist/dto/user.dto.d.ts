import { z } from 'zod';
import { UserRole } from '@org/db-models';
export declare const CreateUserSchema: z.ZodObject<{
    name: z.ZodString;
    password: z.ZodString;
    role: z.ZodEnum<typeof UserRole>;
    teamId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type CreateUserDto = z.infer<typeof CreateUserSchema>;
export declare const UpdateUserSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    password: z.ZodOptional<z.ZodString>;
    role: z.ZodOptional<z.ZodEnum<typeof UserRole>>;
    teamId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type UpdateUserDto = z.infer<typeof UpdateUserSchema>;
export declare const UpdateUserCampaignsSchema: z.ZodObject<{
    campaigns: z.ZodArray<z.ZodString>;
    remove: z.ZodBoolean;
}, z.core.$strip>;
export type UpdateUserCampaignsDto = z.infer<typeof UpdateUserCampaignsSchema>;
//# sourceMappingURL=user.dto.d.ts.map