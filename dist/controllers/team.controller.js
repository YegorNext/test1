"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamController = void 0;
const team_service_1 = require("../services/team.service");
const team_dto_1 = require("../dto/team.dto");
class TeamController {
    static async create(req, res) {
        const parse = team_dto_1.CreateTeamSchema.safeParse(req.body);
        if (!parse.success)
            return res.status(400).json(parse.error);
        const team = await team_service_1.teamService.createTeam(parse.data);
        res.json(team);
    }
    static async delete(req, res) {
        await team_service_1.teamService.deleteTeam(req.params.id);
        res.json({ message: 'Team deleted' });
    }
    static async getAll(req, res) {
        const teams = await team_service_1.teamService.getAllTeams();
        res.json(teams);
    }
    static async getTeam(req, res) {
        const team = await team_service_1.teamService.getTeam(req.params.id);
        if (!team)
            return res.status(404).json({ message: 'Team not found' });
        res.json(team);
    }
    static async update(req, res) {
        const parse = team_dto_1.UpdateTeamSchema.safeParse(req.body);
        if (!parse.success)
            return res.status(400).json(parse.error);
        const team = await team_service_1.teamService.updateTeam(req.params.id, parse.data);
        res.json(team);
    }
    static async addMembers(req, res) {
        const parse = team_dto_1.UpdateTeamMembersSchema.safeParse(req.body);
        if (!parse.success)
            return res.status(400).json(parse.error);
        const team = await team_service_1.teamService.addMembers(req.params.id, parse.data);
        res.json(team);
    }
    static async removeMembers(req, res) {
        const parse = team_dto_1.UpdateTeamMembersSchema.safeParse(req.body);
        if (!parse.success)
            return res.status(400).json(parse.error);
        const team = await team_service_1.teamService.removeMembers(req.params.id, parse.data);
        res.json(team);
    }
}
exports.TeamController = TeamController;
//# sourceMappingURL=team.controller.js.map