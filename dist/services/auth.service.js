"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authService = exports.AuthService = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const prisma_1 = require("../utils/prisma");
const db_models_1 = require("@org/db-models");
const db_models_2 = require("@org/db-models");
const JWT_SECRET = process.env.JWT_SECRET || 'supersecret';
const JWT_EXPIRES_IN = '24h';
class AuthService {
    async login(dto) {
        const loggedUser = await prisma_1.prisma.$transaction(async (tx) => {
            const user = await tx.user.findUnique({
                where: { name: dto.name },
                include: { servers: true, archives: true, team: true },
            });
            if (!user)
                return null;
            const valid = await bcrypt_1.default.compare(dto.password, user.password);
            if (!valid)
                return { user, token: null };
            const token = jsonwebtoken_1.default.sign({ userId: user.id, role: user.role, tokenVersion: user.tokenVersion }, JWT_SECRET, {
                expiresIn: JWT_EXPIRES_IN,
            });
            const tokenExpiry = new Date(Date.now() + 24 * 60 * 60 * 1000);
            const updatedUser = await tx.user.update({
                where: { id: user.id },
                data: { token, tokenExpiry },
                include: { servers: true, archives: true, team: true },
            });
            return { user: updatedUser, token };
        });
        if (!loggedUser)
            return null;
        const { user, token } = loggedUser;
        const mappedUser = new db_models_1.UserEntity({
            ...user,
            role: db_models_2.userRoleMap[user.role],
            team: user.team
                ? new db_models_1.UserTeamEntity({
                    name: user.team.name,
                    alias: user.team.alias,
                })
                : null,
            servers: user.servers?.map((s) => s.id),
            archives: user.archives?.map((a) => a.id),
        });
        if (!token)
            return { user: mappedUser, token: null };
        return { user: mappedUser, token };
    }
    async logout(id) {
        await prisma_1.prisma.user.update({
            where: { id },
            data: { token: null, tokenExpiry: null, tokenVersion: { increment: 1 } },
        });
    }
    async verifyToken(token) {
        let payload;
        try {
            payload = jsonwebtoken_1.default.verify(token, JWT_SECRET);
        }
        catch {
            throw new Error('Invalid token');
        }
        const user = await prisma_1.prisma.user.findUnique({
            where: { id: payload.userId },
            select: { tokenVersion: true },
        });
        if (!user) {
            throw new Error('User not found');
        }
        if (user.tokenVersion !== payload.tokenVersion) {
            throw new Error('Token revoked');
        }
        return payload;
    }
}
exports.AuthService = AuthService;
exports.authService = new AuthService();
//# sourceMappingURL=auth.service.js.map