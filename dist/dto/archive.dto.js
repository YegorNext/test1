"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteArchivesSchema = exports.DownloadArchivesSchema = exports.UploadArchivesSchema = void 0;
const zod_1 = require("zod");
exports.UploadArchivesSchema = zod_1.z.object({
    files: zod_1.z.array(zod_1.z.custom((file) => {
        if (!file || typeof file !== 'object' || !('buffer' in file))
            return false;
        const f = file;
        const allowedExt = ['.zip', '.rar', '.7z', '.tar', '.gz'];
        const ext = f.originalname.slice(f.originalname.lastIndexOf('.')).toLowerCase();
        return allowedExt.includes(ext);
    }, { message: 'File must be an archive (.zip, .rar, .7z, .tar, .gz)' })),
});
exports.DownloadArchivesSchema = zod_1.z.object({
    ids: zod_1.z.array(zod_1.z.string()),
});
exports.DeleteArchivesSchema = zod_1.z.object({
    ids: zod_1.z.array(zod_1.z.string()),
});
//# sourceMappingURL=archive.dto.js.map