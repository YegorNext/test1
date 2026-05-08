import { IDeployManager, DeployTarget } from './deploy.manager.interface';
export declare class ForgeDeployManager implements IDeployManager {
    deploy(target: DeployTarget): Promise<{
        message: string;
        success: boolean;
    }>;
}
//# sourceMappingURL=forge.deploy.manager.d.ts.map