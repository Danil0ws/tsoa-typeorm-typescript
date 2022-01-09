"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const typeorm_1 = require("typeorm");
const config_1 = __importDefault(require("./database/config"));
const port = process.env.PORT;
typeorm_1.createConnection(config_1.default)
    .then((_connection) => {
    app_1.app.listen(port, () => {
        console.log("Server is running on port", port);
    });
})
    .catch((err) => {
    console.log("Unable to connect to db", err);
    process.exit(1);
});
//# sourceMappingURL=server.js.map