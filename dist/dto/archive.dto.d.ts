import { z } from 'zod';
export declare const UploadArchivesSchema: z.ZodObject<{
    files: z.ZodArray<z.ZodCustom<Express.Multer.File, Express.Multer.File>>;
}, z.core.$strip>;
export type UploadArchivesDto = z.infer<typeof UploadArchivesSchema>;
export declare const DownloadArchivesSchema: z.ZodObject<{
    ids: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
export type DownloadArchivesDto = z.infer<typeof DownloadArchivesSchema>;
export declare const DeleteArchivesSchema: z.ZodObject<{
    ids: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
export type DeleteArchivesDto = z.infer<typeof DeleteArchivesSchema>;
//# sourceMappingURL=archive.dto.d.ts.map