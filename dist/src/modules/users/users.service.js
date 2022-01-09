"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const User_entity_1 = __importDefault(require("./../../database/entity/User.entity"));
class UsersService {
    async get(id) {
        return await typeorm_1.getConnection().getRepository(User_entity_1.default).find({ id });
    }
    async create(userCreationParams) {
        const user = new User_entity_1.default();
        user.id = Math.floor(Math.random() * 10000);
        user.firstName = userCreationParams.firstName;
        user.lastName = userCreationParams.lastName;
        user.age = userCreationParams.age;
        await typeorm_1.getConnection().getRepository(User_entity_1.default).save(user);
        return user;
    }
}
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map