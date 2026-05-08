import { ISSLManager } from '../../managers/ssl.managers/ssl.manager.interface';
export declare class HttpSSLManager implements ISSLManager {
    checkSSL(serverId: string, siteId: string, domainName?: string): Promise<boolean>;
    installSSL(serverId: string, siteId: string): Promise<boolean>;
}
//# sourceMappingURL=http.ssl.manager.d.ts.map