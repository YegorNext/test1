"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForbiddenWordEntity = void 0;
class ForbiddenWordEntity {
    id;
    word;
    isActive;
    createdAt;
    constructor(partial) {
        Object.assign(this, partial);
    }
}
exports.ForbiddenWordEntity = ForbiddenWordEntity;
//# sourceMappingURL=forbidden-word.entity.js.map