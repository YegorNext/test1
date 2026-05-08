"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeployManagerProvider = void 0;
const forge_deploy_manager_1 = require("../managers/deploy.managers/forge.deploy.manager");
const constants_1 = require("../utils/constants/constants");
class DeployManagerProvider {
    static getDeployManager(type) {
        if (type === constants_1.DEPLOY_PROVIDER)
            return new forge_deploy_manager_1.ForgeDeployManager();
        return null;
    }
}
exports.DeployManagerProvider = DeployManagerProvider;
//# sourceMappingURL=deploy.manager.provider.js.map