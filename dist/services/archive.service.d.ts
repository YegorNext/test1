import { ArchiveEntity, DownloadArchiveEntity } from '@org/db-models';
import { UserRole } from '@org/db-models';
export declare class ArchiveService {
    private readonly limit;
    upload(userId: string, files: Express.Multer.File[]): Promise<ArchiveEntity[]>;
    getDownloadLinks(ids: string[]): Promise<DownloadArchiveEntity[]>;
    private getDownloadLink;
    delete(userId: string, role: UserRole, ids: string[]): Promise<{
        deleted: number;
    }>;
    getAll(userId: string, role: UserRole): Promise<ArchiveEntity[]>;
    getarchiveStream(path: string): Promise<NodeJS.ReadableStream>;
}
export declare const archiveService: ArchiveService;
//# sourceMappingURL=archive.service.d.ts.map