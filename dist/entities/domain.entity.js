"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DomainEntity = void 0;
class DomainEntity {
    id;
    name;
    serverId;
    repoId;
    sshUrl;
    price;
    hasSSL;
    campaign;
    type;
    constructor(partial) {
        Object.assign(this, partial);
    }
}
exports.DomainEntity = DomainEntity;
//# sourceMappingURL=domain.entity.js.map