import axios from 'axios';
export declare class SiteService {
    createSite(serverId: string, domain: string): Promise<any>;
    deleteSite(serverId: string, siteId: string): Promise<void>;
    updateNginxConfig(serverId: string, siteId: string, domain: string): Promise<void>;
    checkSSL(serverId: string, siteId: string): Promise<axios.AxiosResponse<any, any, {}>>;
    installSSL(serverId: string, siteId: string, domain: string): Promise<void>;
    createDeploymentKey(serverId: string, siteId: string): Promise<any>;
    setDeploymentSettings(serverId: string, siteId: string, domain: string): Promise<any>;
    enableDeployment(serverId: string, siteId: string): Promise<any>;
    private errorMessage;
}
export declare const siteService: SiteService;
//# sourceMappingURL=site.service.d.ts.map