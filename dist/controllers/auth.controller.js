"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const auth_service_1 = require("../services/auth.service");
const auth_dto_1 = require("../dto/auth.dto");
class AuthController {
    static async login(req, res) {
        const parse = auth_dto_1.LoginSchema.safeParse(req.body);
        if (!parse.success)
            return res.status(400).json(parse.error);
        const result = await auth_service_1.authService.login(parse.data);
        if (!result)
            return res.status(404).json({ message: 'Invalid login' });
        if (!result.token)
            return res.status(401).json({ message: 'Invalid password' });
        res.status(200).json(result);
    }
    static async logout(req, res) {
        const userId = req.user?.userId;
        if (!userId)
            return res.status(401).json({ message: 'Unauthorized' });
        await auth_service_1.authService.logout(userId);
        res.status(200).json({ message: 'Logged out successfully' });
    }
}
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map