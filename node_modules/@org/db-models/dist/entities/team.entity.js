"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamEntity = exports.MemberEntity = void 0;
class MemberEntity {
    id;
    name;
    constructor(partial) {
        Object.assign(this, partial);
    }
}
exports.MemberEntity = MemberEntity;
class TeamEntity {
    id;
    name;
    alias;
    members;
    constructor(partial) {
        Object.assign(this, partial);
    }
}
exports.TeamEntity = TeamEntity;
//# sourceMappingURL=team.entity.js.map