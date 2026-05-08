import { ServerEntity } from '@org/db-models';
import { DomainEntity } from '@org/db-models';
import { CreateServerDto, UpdateServerDto } from '../dto/server.dto';
import { CreateDomainsDto } from '../dto/domain.dto';
import { ForgeServer } from './forge.service';
export declare class ServerService {
    createServer(dto: CreateServerDto): Promise<ServerEntity>;
    updateServer(id: string, dto: UpdateServerDto): Promise<ServerEntity | null>;
    updateDatabase(servers: ForgeServer[], after?: string): Promise<{
        name: string;
        id: string;
        createdAt: Date;
        userId: string | null;
        ip: string;
        rootPassword: string;
        forgePassword: string;
        price: number;
        active: boolean;
        expiredAt: Date;
    }[]>;
    getAllServers(): Promise<ServerEntity[]>;
    getServer(id: string): Promise<ServerEntity | null>;
    assignServer(id: string, userId: string): Promise<ServerEntity | null>;
    unassignServer(id: string): Promise<ServerEntity | null>;
    deactivateServer(id: string): Promise<ServerEntity | null>;
    deleteServer(id: string): Promise<void>;
    addDomains(serverId: string, dto: CreateDomainsDto): Promise<{
        created: DomainEntity[];
        rejected: {
            domain: string;
            reason: string;
        }[];
    } | null>;
    rebootServer(serverId: string): Promise<void>;
    private mapServer;
}
export declare const serverService: ServerService;
//# sourceMappingURL=server.service.d.ts.map