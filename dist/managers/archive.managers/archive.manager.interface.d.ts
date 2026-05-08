import { CloackType, TreeItem } from '../../utils/types/shared';
export interface ArchiveConfig {
    archivePath: string;
    domainName: string;
    cloack: CloackType;
    alias: string;
    user: string;
    team: string;
    campaign: string;
    allowedCountries: string[];
    allowedOS: Record<string, boolean>;
}
export interface IArchiveManager {
    prepareArchiveFiles(tree: TreeItem[], config: ArchiveConfig): Promise<void>;
}
//# sourceMappingURL=archive.manager.interface.d.ts.map