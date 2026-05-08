"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArchiveManagerProvider = void 0;
const do_archive_manager_1 = require("../managers/archive.managers/do.archive.manager");
const constants_1 = require("../utils/constants/constants");
class ArchiveManagerProvider {
    static getArchiveManager(type) {
        if (type === constants_1.ARCHIVE_PROVIDER)
            return new do_archive_manager_1.DigitalOceanArchiveManager();
        return null;
    }
}
exports.ArchiveManagerProvider = ArchiveManagerProvider;
//# sourceMappingURL=archive.manager.provider.js.map