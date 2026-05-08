"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const http_1 = require("http");
const helmet_1 = __importDefault(require("helmet"));
//import cors from 'cors';
const morgan_1 = __importDefault(require("morgan"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swagger_1 = require("./swagger");
const auth_routes_1 = __importDefault(require("./routes/auth.routes"));
const user_routes_1 = __importDefault(require("./routes/user.routes"));
const team_routes_1 = __importDefault(require("./routes/team.routes"));
const archive_routes_1 = __importDefault(require("./routes/archive.routes"));
const server_routes_1 = __importDefault(require("./routes/server.routes"));
const domain_routes_1 = __importDefault(require("./routes/domain.routes"));
const forbiddenWord_routes_1 = __importDefault(require("./routes/forbiddenWord.routes"));
const DomainNameFilter_1 = require("./services/components/DomainNameFilter");
const PORT = parseInt(process.env.PORT || '3000', 10);
// const options = {
//   origin: '*',
// };
const app = (0, express_1.default)();
//Middleware
app.use((0, helmet_1.default)());
//app.use(cors(options));
app.use(express_1.default.json());
app.use((0, morgan_1.default)('dev', {
    skip: (req) => process.env.NODE_ENV === 'prod' &&
        (req.originalUrl.startsWith('/api-docs') || req.originalUrl.includes('favicon')),
}));
//routes
app.use('/auth', auth_routes_1.default);
app.use('/user', user_routes_1.default);
app.use('/team', team_routes_1.default);
app.use('/archive', archive_routes_1.default);
app.use('/server', server_routes_1.default);
app.use('/domain', domain_routes_1.default);
app.use('/forbiddenWords', forbiddenWord_routes_1.default);
//handlers
app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        success: false,
        message: err.message,
    });
});
//Swagger
const specs = (0, swagger_jsdoc_1.default)(swagger_1.swaggerOptions);
app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(specs));
const server = (0, http_1.createServer)(app);
// main function
const run = async () => {
    try {
        await DomainNameFilter_1.domainNameFilter.refreshFromDB(); // Load forbidden words from DB on startup
        console.log('Forbidden words loaded from DB');
        server.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    }
    catch (error) {
        console.error(`Server failed to start: ${error.message}`);
    }
};
run();
//# sourceMappingURL=index.js.map