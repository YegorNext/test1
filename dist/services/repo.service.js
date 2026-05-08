"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.repoService = exports.RepoService = void 0;
const axios_1 = __importDefault(require("axios"));
const rest_1 = require("@octokit/rest");
class RepoService {
    octokit = new rest_1.Octokit({ auth: process.env.GIT_HUB_TOKEN });
    getGitHubHeaders() {
        return {
            Authorization: `Bearer ${process.env.GIT_HUB_TOKEN}`,
            Accept: 'application/vnd.github+json',
        };
    }
    async createRepository(name) {
        const url = `${process.env.GIT_HUB_API_URL}/orgs/${process.env.GIT_HUB_ORG}/repos`;
        try {
            const response = await axios_1.default.post(url, {
                name: name,
                private: true,
                auto_init: true,
            }, {
                headers: this.getGitHubHeaders(),
            });
            return {
                id: response.data.id,
                ssh_url: response.data.ssh_url,
            };
        }
        catch (error) {
            throw new Error(this.errorMessage(error));
        }
    }
    async deleteRepository(domain) {
        const url = `${process.env.GIT_HUB_API_URL}/repos/${process.env.GIT_HUB_ORG}/${domain}`;
        try {
            await axios_1.default.delete(url, {
                headers: this.getGitHubHeaders(),
            });
        }
        catch (error) {
            throw new Error(this.errorMessage(error));
        }
    }
    async setDeploymentKey(domain, key) {
        const url = `${process.env.GIT_HUB_API_URL}/repos/${process.env.GIT_HUB_ORG}/${domain}/keys`;
        try {
            const response = await axios_1.default.post(url, {
                title: 'Laravel Forge Deploy Key',
                key,
                read_only: true,
            }, {
                headers: this.getGitHubHeaders(),
            });
            return response.data;
        }
        catch (error) {
            throw new Error(this.errorMessage(error));
        }
    }
    async createBlob(repoName, buffer) {
        return await this.octokit.git.createBlob({
            owner: process.env.GIT_HUB_ORG,
            repo: repoName,
            content: buffer.toString('base64'),
            encoding: 'base64',
        });
    }
    async commit(repoName, tree) {
        const baseSha = await this.getHeadSha(repoName);
        const treeSha = await this.createTree(repoName, tree);
        const commit = await this.octokit.git.createCommit({
            owner: process.env.GIT_HUB_ORG,
            repo: repoName,
            message: 'Deploy',
            tree: treeSha,
            parents: [baseSha],
        });
        await this.octokit.git.updateRef({
            owner: process.env.GIT_HUB_ORG,
            repo: repoName,
            ref: `heads/main`,
            sha: commit.data.sha,
            force: true,
        });
    }
    async getHeadSha(repoName) {
        const ref = await this.octokit.git.getRef({
            owner: process.env.GIT_HUB_ORG,
            repo: repoName,
            ref: `heads/main`,
        });
        return ref.data.object.sha;
    }
    async createTree(repoName, tree) {
        const result = await this.octokit.git.createTree({
            owner: process.env.GIT_HUB_ORG,
            repo: repoName,
            tree,
        });
        return result.data.sha;
    }
    errorMessage(error) {
        if (axios_1.default.isAxiosError(error)) {
            const data = error.response?.data;
            const response = typeof data === 'string' ? data : (data?.message ?? data);
            const details = typeof response === 'string' ? response : JSON.stringify(response);
            return `GitHub request failed (${error.response?.status}): ${details}`;
        }
        if (error instanceof Error) {
            return `GitHub request failed: ${error.message}`;
        }
        return `GitHub request failed: ${String(error)}`;
    }
}
exports.RepoService = RepoService;
exports.repoService = new RepoService();
//# sourceMappingURL=repo.service.js.map