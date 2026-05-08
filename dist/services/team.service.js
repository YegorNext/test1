"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.teamService = exports.TeamService = void 0;
const prisma_1 = require("../utils/prisma");
const db_models_1 = require("@org/db-models");
class TeamService {
    async createTeam(dto) {
        const team = await prisma_1.prisma.team.create({
            data: {
                name: dto.name,
                alias: dto.alias ?? '',
            },
            include: {
                members: true,
            },
        });
        return this.mapTeam(team);
    }
    async deleteTeam(id) {
        await prisma_1.prisma.team.delete({ where: { id } });
    }
    async getAllTeams() {
        const teams = await prisma_1.prisma.team.findMany({
            include: { members: true },
        });
        return teams.map((team) => this.mapTeam(team));
    }
    async getTeam(id) {
        const team = await prisma_1.prisma.team.findUnique({
            where: { id },
            include: { members: true },
        });
        if (!team)
            return null;
        return this.mapTeam(team);
    }
    async updateTeam(id, dto) {
        const data = {};
        Object.entries(dto).forEach(([key, value]) => {
            if (value !== undefined)
                data[key] = value;
        });
        const team = await prisma_1.prisma.team.update({
            where: { id },
            data,
            include: {
                members: true,
            },
        });
        return this.mapTeam(team);
    }
    async addMembers(id, dto) {
        const team = await prisma_1.prisma.team.update({
            where: { id },
            data: {
                members: { connect: dto.memberIds.map((id) => ({ id })) },
            },
            include: { members: true },
        });
        return this.mapTeam(team);
    }
    async removeMembers(id, dto) {
        const team = await prisma_1.prisma.team.update({
            where: { id },
            data: {
                members: { disconnect: dto.memberIds.map((id) => ({ id })) },
            },
            include: { members: true },
        });
        return this.mapTeam(team);
    }
    mapTeam(team) {
        return new db_models_1.TeamEntity({
            ...team,
            members: team.members.map((member) => new db_models_1.MemberEntity({ ...member })),
        });
    }
}
exports.TeamService = TeamService;
exports.teamService = new TeamService();
//# sourceMappingURL=team.service.js.map