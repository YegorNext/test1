export interface ISSLManager {
    checkSSL(serverId: string, siteId: string, domainName?: string): Promise<boolean>;
    installSSL(serverId: string, siteId: string, siteName: string): Promise<boolean>;
}
//# sourceMappingURL=ssl.manager.interface.d.ts.map