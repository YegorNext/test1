import { ISSLManager } from './ssl.manager.interface';
export declare class ForgeSSLManager implements ISSLManager {
    checkSSL(serverId: string, siteId: string): Promise<boolean>;
    installSSL(serverId: string, siteId: string, siteName: string): Promise<boolean>;
    private check;
}
//# sourceMappingURL=forge.ssl.manager.d.ts.map