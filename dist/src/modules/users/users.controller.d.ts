import { Controller } from "tsoa";
import { User } from "./users.model";
import { UserCreationParams } from "./users.service";
export declare class UsersController extends Controller {
    getUser(userId: number): Promise<User>;
    createUser(requestBody: UserCreationParams): Promise<User>;
}
