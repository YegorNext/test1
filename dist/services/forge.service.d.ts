export interface ForgeServer {
    id: number;
    credential_id: number;
    name: string;
    size: string;
    region: string;
    php_version: string;
    php_cli_version: string;
    opcache_status: string;
    database_type: string;
    ip_address: string;
    private_ip_address: string;
    blackfire_status: string | null;
    papertrail_status: string | null;
    revoked: boolean;
    created_at: string;
    is_ready: boolean;
    network: any[];
}
export interface ForgeServersResponse {
    servers: ForgeServer[];
}
export declare class ForgeService {
    #private;
    deleteServer(id: string): Promise<void>;
    getServers(): Promise<ForgeServer[]>;
    createSite(serverId: string, domain: string): Promise<string>;
    deleteSite(serverId: string, siteId: string): Promise<void>;
    rebootServer(id: string): Promise<void>;
}
export declare const forgeService: ForgeService;
//# sourceMappingURL=forge.service.d.ts.map