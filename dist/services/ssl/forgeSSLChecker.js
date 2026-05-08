"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForgeSSLChecker = void 0;
const ssl_manager_provider_1 = require("../../providers/ssl.manager.provider");
const constants_1 = require("../../utils/constants/constants");
class ForgeSSLChecker {
    serverId;
    constructor(serverId) {
        this.serverId = serverId;
    }
    async check(domain) {
        if (!this.serverId)
            throw new Error('This domain is not associated with any server');
        const sslManager = ssl_manager_provider_1.SSLManagerProvider.getSSLManager(constants_1.SSL_PROVIDER);
        if (!sslManager)
            throw new Error('SSL Manager not found');
        return await sslManager.checkSSL(this.serverId, domain);
    }
}
exports.ForgeSSLChecker = ForgeSSLChecker;
//# sourceMappingURL=forgeSSLChecker.js.map