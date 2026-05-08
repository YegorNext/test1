"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArchiveController = void 0;
const archive_service_1 = require("../services/archive.service");
const archive_dto_1 = require("../dto/archive.dto");
class ArchiveController {
    static async upload(req, res) {
        const files = req.files;
        if (!files || !files.length) {
            return res.status(400).json({ message: 'No files provided' });
        }
        const parse = archive_dto_1.UploadArchivesSchema.safeParse({ files });
        if (!parse.success)
            return res.status(400).json(parse.error);
        const userId = req.user.userId;
        const uploaded = await archive_service_1.archiveService.upload(userId, files);
        const message = uploaded.length > 0
            ? `Uploaded ${uploaded.length} of ${files.length}`
            : `No files were uploaded`;
        res.status(200).json({ archives: uploaded, message });
    }
    static async download(req, res) {
        const parse = archive_dto_1.DownloadArchivesSchema.safeParse(req.body);
        if (!parse.success)
            return res.status(400).json(parse.error);
        const links = await archive_service_1.archiveService.getDownloadLinks(parse.data.ids);
        res.status(200).json({ links });
    }
    static async delete(req, res) {
        const parse = archive_dto_1.DeleteArchivesSchema.safeParse(req.body);
        if (!parse.success)
            return res.status(400).json(parse.error);
        const userId = req.user.userId;
        const userRole = req.user.role;
        const result = await archive_service_1.archiveService.delete(userId, userRole, parse.data.ids);
        res.status(200).json(result);
    }
    static async getAll(req, res) {
        const userId = req.user.userId;
        const role = req.user.role;
        const archives = await archive_service_1.archiveService.getAll(userId, role);
        res.status(200).json({ archives });
    }
}
exports.ArchiveController = ArchiveController;
//# sourceMappingURL=archive.controller.js.map