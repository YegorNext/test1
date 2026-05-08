import { z } from 'zod';
export declare const LoginSchema: z.ZodObject<{
    name: z.ZodString;
    password: z.ZodString;
}, z.core.$strip>;
export type LoginDto = z.infer<typeof LoginSchema>;
//# sourceMappingURL=auth.dto.d.ts.map