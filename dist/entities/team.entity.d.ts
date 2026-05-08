export declare class MemberEntity {
    id: string;
    name: string;
    constructor(partial: Partial<MemberEntity>);
}
export declare class TeamEntity {
    id: string;
    name: string;
    alias: string;
    members?: MemberEntity[];
    constructor(partial: Partial<TeamEntity>);
}
//# sourceMappingURL=team.entity.d.ts.map