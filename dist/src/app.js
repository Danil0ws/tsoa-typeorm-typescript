"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importStar(require("express"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const morgan_1 = __importDefault(require("morgan"));
const routes_1 = require("../build/routes");
require("dotenv/config");
exports.app = express_1.default();
exports.app.use(express_1.urlencoded({
    extended: true,
}));
morgan_1.default(':method :url :status :res[content-length] - :response-time ms');
exports.app.use(express_1.json());
exports.app.use("/docs", swagger_ui_express_1.default.serve, async (_req, res) => {
    return res.send(swagger_ui_express_1.default.generateHTML(await Promise.resolve().then(() => __importStar(require('./../build/swagger.json')))));
});
routes_1.RegisterRoutes(exports.app);
//# sourceMappingURL=app.js.map