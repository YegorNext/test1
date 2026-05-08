import { ISSLChecker } from './ISSLChecker';
export declare class ForgeSSLChecker implements ISSLChecker {
    private serverId;
    constructor(serverId: string);
    check(domain: string): Promise<boolean>;
}
//# sourceMappingURL=forgeSSLChecker.d.ts.map