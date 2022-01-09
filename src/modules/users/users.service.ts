import { User } from "./users.model";
import { getConnection } from "typeorm";
import UserEntity from "./../../database/entity/User.entity";

export type UserCreationParams = Pick<User, "firstName" | "lastName" | "age">;

export class UsersService {
  public async get(id: number): Promise<User | any> {
    return await getConnection().getRepository(UserEntity).find({ id })
  }

  public async create(userCreationParams: UserCreationParams): Promise<User> {
    const user = new UserEntity();
    user.id = Math.floor(Math.random() * 10000)
    user.firstName = userCreationParams.firstName
    user.lastName = userCreationParams.lastName
    user.age = userCreationParams.age
    await getConnection().getRepository(UserEntity).save(user)
    return user
  }
}