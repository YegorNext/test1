"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userService = exports.UserService = void 0;
const prisma_1 = require("../utils/prisma");
const bcrypt_1 = __importDefault(require("bcrypt"));
const db_models_1 = require("@org/db-models");
const db_models_2 = require("@org/db-models");
class UserService {
    async createUser(dto) {
        const hashedPassword = await bcrypt_1.default.hash(dto.password, 10);
        const user = await prisma_1.prisma.user.create({
            data: { ...dto, password: hashedPassword, teamId: dto.teamId ?? null },
            include: { team: true, servers: true, archives: true },
        });
        return this.mapUser(user);
    }
    async deleteUser(id, currentUserId) {
        if (id === currentUserId) {
            throw new Error('You cannot delete yourself');
        }
        await prisma_1.prisma.user.delete({ where: { id } });
    }
    async getAllUsers() {
        const users = await prisma_1.prisma.user.findMany({
            include: { team: true, servers: true, archives: true },
        });
        return users.map((user) => this.mapUser(user));
    }
    async getUser(id) {
        const user = await prisma_1.prisma.user.findUnique({
            where: { id },
            include: { team: true, servers: true, archives: true },
        });
        if (!user)
            return null;
        return this.mapUser(user);
    }
    async updateUser(id, dto) {
        if (dto.password) {
            dto.password = await bcrypt_1.default.hash(dto.password, 10);
        }
        const data = {};
        Object.entries(dto).forEach(([key, value]) => {
            if (value !== undefined)
                data[key] = value;
        });
        const user = await prisma_1.prisma.user.update({
            where: { id },
            data,
            include: {
                team: true,
                servers: true,
                archives: true,
            },
        });
        return this.mapUser(user);
    }
    async updateUserCampaigns(id, dto) {
        const { campaigns, remove } = dto;
        const updatedUser = await prisma_1.prisma.$transaction(async (tx) => {
            const user = await tx.user.findUnique({
                where: { id },
                select: { campaigns: true },
            });
            if (!user)
                return null;
            let updatedCampaigns;
            if (remove) {
                const toRemove = new Set(campaigns);
                updatedCampaigns = user.campaigns.filter((campaign) => !toRemove.has(campaign));
            }
            else {
                updatedCampaigns = Array.from(new Set([...user.campaigns, ...campaigns]));
            }
            return await tx.user.update({
                where: { id },
                data: {
                    campaigns: {
                        set: updatedCampaigns,
                    },
                },
                include: { team: true, servers: true, archives: true },
            });
        });
        return updatedUser ? this.mapUser(updatedUser) : null;
    }
    mapUser(user) {
        return new db_models_1.UserEntity({
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
    }
}
exports.UserService = UserService;
exports.userService = new UserService();
//# sourceMappingURL=user.service.js.map