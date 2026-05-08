"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildNginxConfig = exports.getForgeHeaders = void 0;
const promises_1 = __importDefault(require("fs/promises"));
const path_1 = __importDefault(require("path"));
const getForgeHeaders = () => {
    return {
        Authorization: `Bearer ${process.env.FORGE_API_TOKEN}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
    };
};
exports.getForgeHeaders = getForgeHeaders;
const buildNginxConfig = async (domain) => {
    const templatePath = path_1.default.resolve(__dirname, '../../templates/nginx/nginx.conf.tmpl');
    let template = await promises_1.default.readFile(templatePath, 'utf8');
    return template.replaceAll('{{domain}}', domain);
};
exports.buildNginxConfig = buildNginxConfig;
//# sourceMappingURL=helpers.js.map