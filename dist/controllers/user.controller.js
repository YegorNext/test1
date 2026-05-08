"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const user_service_1 = require("../services/user.service");
const user_dto_1 = require("../dto/user.dto");
class UserController {
    static async create(req, res) {
        const parse = user_dto_1.CreateUserSchema.safeParse(req.body);
        if (!parse.success)
            return res.status(400).json(parse.error);
        const user = await user_service_1.userService.createUser(parse.data);
        res.json(user);
    }
    static async delete(req, res) {
        await user_service_1.userService.deleteUser(req.params.id, req.user.userId);
        res.json({ message: 'User deleted' });
    }
    static async getAll(req, res) {
        const users = await user_service_1.userService.getAllUsers();
        res.json(users);
    }
    static async getUser(req, res) {
        const user = await user_service_1.userService.getUser(req.params.id);
        if (!user)
            return res.status(404).json({ message: 'User not found' });
        res.json(user);
    }
    static async update(req, res) {
        const parse = user_dto_1.UpdateUserSchema.safeParse(req.body);
        if (!parse.success)
            return res.status(400).json(parse.error);
        const user = await user_service_1.userService.updateUser(req.params.id, parse.data);
        res.json(user);
    }
    static async updateCampaigns(req, res) {
        const parse = user_dto_1.UpdateUserCampaignsSchema.safeParse(req.body);
        if (!parse.success)
            return res.status(400).json(parse.error);
        const user = await user_service_1.userService.updateUserCampaigns(req.params.id, parse.data);
        if (!user)
            return res.status(404).json({ message: 'User not found' });
        res.json(user);
    }
}
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map