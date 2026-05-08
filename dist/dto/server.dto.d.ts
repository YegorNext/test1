import { z } from 'zod';
export declare const CreatServerSchema: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    ip: z.ZodIPv4;
    rootPassword: z.ZodString;
    forgePassword: z.ZodString;
    price: z.ZodNumber;
}, z.core.$strip>;
export type CreateServerDto = z.infer<typeof CreatServerSchema>;
export declare const UpdateServerSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    ip: z.ZodOptional<z.ZodIPv4>;
    rootPassword: z.ZodOptional<z.ZodString>;
    forgePassword: z.ZodOptional<z.ZodString>;
    userId: z.ZodOptional<z.ZodString>;
    price: z.ZodOptional<z.ZodNumber>;
    active: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type UpdateServerDto = z.infer<typeof UpdateServerSchema>;
//# sourceMappingURL=server.dto.d.ts.map