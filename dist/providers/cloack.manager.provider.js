"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloackManagerProvider = void 0;
const shared_1 = require("../utils/types/shared");
const palladium_manager_1 = require("../managers/cloak.managers/palladium.manager");
class CloackManagerProvider {
    static getCloackManager(type) {
        if (type === shared_1.CloackType.PALLADIUM)
            return new palladium_manager_1.PalladiumManager();
        return null;
    }
}
exports.CloackManagerProvider = CloackManagerProvider;
//# sourceMappingURL=cloack.manager.provider.js.map