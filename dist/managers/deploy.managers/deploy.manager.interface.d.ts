import { CloackType } from '../../utils/types/shared';
import { DomainEntity } from '@org/db-models';
export interface DeployTarget {
    domain: DomainEntity;
    archivePath: string;
    cloack: CloackType;
    alias: string;
    user: string;
    team: string;
    campaign: string;
    allowedCountries: string[];
    allowedOS: Record<string, boolean>;
}
export interface IDeployManager {
    deploy(target: DeployTarget): Promise<{
        message: string;
        success: boolean;
    }>;
}
//# sourceMappingURL=deploy.manager.interface.d.ts.map