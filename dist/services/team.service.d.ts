import { CreateTeamDto, UpdateTeamDto, UpdateTeamMembersDto } from '../dto/team.dto';
import { TeamEntity } from '@org/db-models';
export declare class TeamService {
    createTeam(dto: CreateTeamDto): Promise<TeamEntity>;
    deleteTeam(id: string): Promise<void>;
    getAllTeams(): Promise<TeamEntity[]>;
    getTeam(id: string): Promise<TeamEntity | null>;
    updateTeam(id: string, dto: UpdateTeamDto): Promise<TeamEntity>;
    addMembers(id: string, dto: UpdateTeamMembersDto): Promise<TeamEntity>;
    removeMembers(id: string, dto: UpdateTeamMembersDto): Promise<TeamEntity>;
    private mapTeam;
}
export declare const teamService: TeamService;
//# sourceMappingURL=team.service.d.ts.map