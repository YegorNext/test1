"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerEntity = void 0;
class ServerEntity {
    id;
    name;
    ip;
    rootPassword;
    forgePassword;
    userId;
    domains;
    price;
    status;
    createdAt;
    expiredAt;
    constructor(partial) {
        Object.assign(this, partial);
    }
}
exports.ServerEntity = ServerEntity;
//# sourceMappingURL=server.entity.js.map