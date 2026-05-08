import { UpdateDomainDto, DeploySiteDto } from '../dto/domain.dto';
import { DomainEntity, UserRole } from '@org/db-models';
export type PreparedDomain = {
    domain: string;
    repo: {
        id: number;
        ssh_url: string;
    };
    siteId: string;
};
export declare class DomainService {
    getAll(userId: string, role: UserRole): Promise<DomainEntity[]>;
    getDomain(id: string): Promise<DomainEntity | null>;
    updateDomain(id: string, dto: UpdateDomainDto): Promise<DomainEntity>;
    prepareDomain(domain: string, serverId: string): Promise<PreparedDomain>;
    deploy(siteId: string, dto: DeploySiteDto): Promise<{
        message: string;
        success: boolean;
    } | null>;
    checkSSL(siteId: string): Promise<boolean | null>;
    installSSL(siteId: string): Promise<{
        message: string;
        success: boolean;
    } | null>;
    private mapDomain;
}
export declare const domainService: DomainService;
//# sourceMappingURL=domain.service.d.ts.map