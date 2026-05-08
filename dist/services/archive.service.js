"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.archiveService = exports.ArchiveService = void 0;
const prisma_1 = require("../utils/prisma");
const uuid_1 = require("uuid");
const p_limit_1 = __importDefault(require("p-limit"));
const spaces_config_1 = require("../utils/digital.ocean/spaces.config");
const client_s3_1 = require("@aws-sdk/client-s3");
const s3_request_presigner_1 = require("@aws-sdk/s3-request-presigner");
const lib_storage_1 = require("@aws-sdk/lib-storage");
const db_models_1 = require("@org/db-models");
const db_models_2 = require("@org/db-models");
const PART_SIZE = (Number(process.env.S3_UPLOAD_PART_SIZE_MB) || 10) * 1024 * 1024;
const QUEUE_SIZE = Number(process.env.S3_UPLOAD_QUEUE_SIZE) || 4;
class ArchiveService {
    limit = (0, p_limit_1.default)(5); //optimal value for uploading files
    async upload(userId, files) {
        console.info(`Start uploading ${files.length} files...`);
        const uploaded = [];
        const errors = [];
        const tasks = files.map((file) => this.limit(async () => {
            console.info(`Uploading ${file.originalname}...`);
            const id = (0, uuid_1.v4)();
            const ext = file.originalname.split('.').pop();
            const path = `${userId}/${id}.${ext}`;
            try {
                const uploader = new lib_storage_1.Upload({
                    client: spaces_config_1.s3,
                    params: {
                        Bucket: process.env.DO_SPACES_BUCKET,
                        Key: path,
                        Body: file.buffer,
                        ContentType: file.mimetype,
                    },
                    partSize: PART_SIZE,
                    queueSize: QUEUE_SIZE,
                });
                await uploader.done();
                const archive = await prisma_1.prisma.archive.create({
                    data: {
                        id,
                        userId,
                        name: file.originalname,
                        path,
                    },
                });
                uploaded.push(archive);
                console.info(`${file.originalname} uploaded`);
                return { success: true, file };
            }
            catch (error) {
                console.error(`Error during uploading file ${file.originalname} (${file.size} bytes): ${error}`);
                errors.push({ file: file.originalname, error });
                return { success: false, file };
            }
        }));
        await Promise.allSettled(tasks);
        return uploaded;
    }
    async getDownloadLinks(ids) {
        const archives = await prisma_1.prisma.archive.findMany({
            where: { id: { in: ids } },
        });
        console.info(`Getting download links for ${archives.length} archives`);
        return Promise.all(archives.map(async (archive) => ({
            id: archive.id,
            name: archive.name,
            link: await this.getDownloadLink(archive),
        })));
    }
    getDownloadLink(archive) {
        const command = new client_s3_1.GetObjectCommand({
            Bucket: process.env.DO_SPACES_BUCKET,
            Key: archive.path,
            ResponseContentDisposition: `attachment; filename="${archive.name}"`,
        });
        return (0, s3_request_presigner_1.getSignedUrl)(spaces_config_1.s3, command, { expiresIn: 3600 });
    }
    async delete(userId, role, ids) {
        const isAdmin = role === db_models_2.UserRole.ADMIN;
        console.info(`Deleting ${ids.length} archives... (admin: ${isAdmin})`);
        const deleted = await prisma_1.prisma.$transaction(async (tx) => {
            const archives = await tx.archive.findMany({
                where: {
                    id: { in: ids },
                    ...(isAdmin ? {} : { userId }),
                },
            });
            console.info(`Found ${archives.length} of ${ids.length}`);
            for (const archive of archives) {
                try {
                    await spaces_config_1.s3.send(new client_s3_1.DeleteObjectCommand({
                        Bucket: process.env.DO_SPACES_BUCKET,
                        Key: archive.path,
                    }));
                }
                catch (error) {
                    console.error(`Failed to delete S3 object ${archive.path}: ${error}`);
                }
            }
            return await tx.archive.deleteMany({
                where: { id: { in: ids }, ...(isAdmin ? {} : { userId }) },
            });
        });
        console.info(`Deleted ${deleted.count}`);
        return { deleted: deleted.count };
    }
    async getAll(userId, role) {
        const isAdmin = role === db_models_2.UserRole.ADMIN;
        const args = isAdmin
            ? {}
            : { where: { userId } };
        const archives = await prisma_1.prisma.archive.findMany(args);
        return archives.map((archive) => new db_models_1.ArchiveEntity(archive));
    }
    async getarchiveStream(path) {
        const command = new client_s3_1.GetObjectCommand({
            Bucket: process.env.DO_SPACES_BUCKET,
            Key: path,
        });
        const response = await spaces_config_1.s3.send(command);
        if (!response.Body) {
            throw new Error(`Empty S3 body by path: ${path}`);
        }
        return response.Body;
    }
}
exports.ArchiveService = ArchiveService;
exports.archiveService = new ArchiveService();
//# sourceMappingURL=archive.service.js.map