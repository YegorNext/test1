import { IArchiveManager, ArchiveConfig } from './archive.manager.interface';
import { TreeItem } from '../../utils/types/shared';
export declare class DigitalOceanArchiveManager implements IArchiveManager {
    private readonly limit;
    prepareArchiveFiles(tree: TreeItem[], config: ArchiveConfig): Promise<void>;
    private toPublicPath;
}
//# sourceMappingURL=do.archive.manager.d.ts.map