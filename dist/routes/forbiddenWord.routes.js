"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_middleware_1 = require("../middleware/auth.middleware");
const role_middleware_1 = require("../middleware/role.middleware");
const error_handler_1 = require("../utils/handlers/error.handler");
const forbiddenWord_controller_1 = require("../controllers/forbiddenWord.controller");
const router = (0, express_1.Router)();
router.post('/', auth_middleware_1.authMiddleware, (0, role_middleware_1.roleMiddleware)(['ADMIN']), (0, error_handler_1.errorHandler)(forbiddenWord_controller_1.ForbiddenWordController.addWord));
router.delete('/id/:id', auth_middleware_1.authMiddleware, (0, role_middleware_1.roleMiddleware)(['ADMIN']), (0, error_handler_1.errorHandler)(forbiddenWord_controller_1.ForbiddenWordController.removeWordById));
router.delete('/name', auth_middleware_1.authMiddleware, (0, role_middleware_1.roleMiddleware)(['ADMIN']), (0, error_handler_1.errorHandler)(forbiddenWord_controller_1.ForbiddenWordController.removeWordByName));
exports.default = router;
//# sourceMappingURL=forbiddenWord.routes.js.map