import { TreeItem } from '../utils/types/shared';
export declare class RepoService {
    private octokit;
    private getGitHubHeaders;
    createRepository(name: string): Promise<{
        id: any;
        ssh_url: any;
    }>;
    deleteRepository(domain: string): Promise<void>;
    setDeploymentKey(domain: string, key: string): Promise<any>;
    createBlob(repoName: string, buffer: Buffer): Promise<import("@octokit/types").OctokitResponse<{
        url: string;
        sha: string;
    }, 201>>;
    commit(repoName: string, tree: TreeItem[]): Promise<void>;
    private getHeadSha;
    private createTree;
    private errorMessage;
}
export declare const repoService: RepoService;
//# sourceMappingURL=repo.service.d.ts.map