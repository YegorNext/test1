export interface CloackConfig {
    alias: string;
    user: string;
    team: string;
    campaign: string;
    allowedCountries: string[];
    allowedOS: Record<string, boolean>;
}
export interface ICloackManager {
    createContent(config: CloackConfig): Promise<string>;
}
//# sourceMappingURL=cloack.manager.interface.d.ts.map