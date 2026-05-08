"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpsChecker = void 0;
class HttpsChecker {
    async check(domain) {
        try {
            if (!domain.startsWith('https://')) {
                domain = `https://${domain}`;
            }
            const controller = new AbortController();
            const timeout = setTimeout(() => controller.abort(), 15000);
            const response = await fetch(domain, { method: 'GET', signal: controller.signal });
            clearTimeout(timeout);
            return response.ok;
        }
        catch {
            return false;
        }
    }
}
exports.HttpsChecker = HttpsChecker;
//# sourceMappingURL=httpsChecker.js.map