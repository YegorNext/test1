"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpSSLManager = void 0;
class HttpSSLManager {
    async checkSSL(serverId, siteId, domainName) {
        const url = `https://${domainName.trim()}`;
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 15000);
        try {
            const response = await fetch(url, {
                method: 'GET',
                signal: controller.signal,
                redirect: 'follow',
            });
            return response.ok;
        }
        catch (error) {
            if (error.name === 'AbortError') {
                console.log(`Timeout while checking ${url}`);
            }
            else {
                console.log(`Failed to fetch ${url}:`, error.message);
            }
            return false;
        }
        finally {
            clearTimeout(timeout);
        }
    }
    async installSSL(serverId, siteId) {
        throw new Error('installSSL is not implemented for HttpSSLManager');
    }
}
exports.HttpSSLManager = HttpSSLManager;
//# sourceMappingURL=http.ssl.manager.js.map