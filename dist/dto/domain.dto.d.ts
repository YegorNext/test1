import { z } from 'zod';
import { CloackType } from '../utils/types/shared';
export declare const CreateDomainsSchema: z.ZodObject<{
    domains: z.ZodArray<z.ZodString>;
    price: z.ZodNumber;
}, z.core.$strip>;
export type CreateDomainsDto = z.infer<typeof CreateDomainsSchema>;
export declare const UpdateDomainSchema: z.ZodObject<{
    price: z.ZodOptional<z.ZodNumber>;
    hasSSL: z.ZodOptional<z.ZodBoolean>;
    campaign: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type UpdateDomainDto = z.infer<typeof UpdateDomainSchema>;
export declare const DeploySiteSchema: z.ZodObject<{
    archivePath: z.ZodString;
    cloack: z.ZodEnum<typeof CloackType>;
    userId: z.ZodString;
    campaign: z.ZodString;
    allowedCountries: z.ZodArray<z.ZodString>;
    allowedOS: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodBoolean>>;
}, z.core.$strip>;
export type DeploySiteDto = z.infer<typeof DeploySiteSchema>;
//# sourceMappingURL=domain.dto.d.ts.map