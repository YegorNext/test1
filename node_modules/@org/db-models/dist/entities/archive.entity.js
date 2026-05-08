"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DownloadArchiveEntity = exports.ArchiveEntity = void 0;
class ArchiveEntity {
    id;
    name;
    path;
    userId;
    createdAt;
    constructor(partial) {
        Object.assign(this, partial);
    }
}
exports.ArchiveEntity = ArchiveEntity;
class DownloadArchiveEntity {
    id;
    name;
    link;
    constructor(partial) {
        Object.assign(this, partial);
    }
}
exports.DownloadArchiveEntity = DownloadArchiveEntity;
//# sourceMappingURL=archive.entity.js.map