"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const config = {
    type: 'sqlite',
    database: ':memory:',
    dropSchema: true,
    entities: [path_1.default.join(__dirname, '/**/*.entity.ts')],
    synchronize: true,
    logging: false,
};
exports.default = config;
//# sourceMappingURL=config.js.map