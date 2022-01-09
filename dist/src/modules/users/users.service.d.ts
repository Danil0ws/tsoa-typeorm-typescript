import { User } from "./users.model";
export declare type UserCreationParams = Pick<User, "firstName" | "lastName" | "age">;
export declare class UsersService {
    get(id: number): Promise<User | any>;
    create(userCreationParams: UserCreationParams): Promise<User>;
}
