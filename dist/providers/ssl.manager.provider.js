"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SSLManagerProvider = void 0;
const forge_ssl_manager_1 = require("../managers/ssl.managers/forge.ssl.manager");
const constants_1 = require("../utils/constants/constants");
const http_ssl_manager_1 = require("../managers/ssl.managers/http.ssl.manager");
class SSLManagerProvider {
    static getSSLManager(type) {
        if (type === constants_1.SSL_PROVIDER.FORGE)
            return new forge_ssl_manager_1.ForgeSSLManager();
        if (type === constants_1.SSL_PROVIDER.HTTP)
            return new http_ssl_manager_1.HttpSSLManager();
        return null;
    }
}
exports.SSLManagerProvider = SSLManagerProvider;
//# sourceMappingURL=ssl.manager.provider.js.map