// src/users/usersController.ts
import {
    Body,
    Controller,
    Get,
    Path,
    Post,
    Route,
    SuccessResponse,
  } from "tsoa";
  import { User } from "./users.model";
  import { UsersService, UserCreationParams } from "./users.service";
  
  @Route("users")
  export class UsersController extends Controller {
    @Get("{userId}")
    public async getUser(
      @Path() userId: number,
    ): Promise<User> {
      return await new UsersService().get(userId);
    }
  
    @SuccessResponse("201", "Created")
    @Post()
    public async createUser(
      @Body() requestBody: UserCreationParams
    ): Promise<User> {
      this.setStatus(201);
      return await new UsersService().create(requestBody);      
    }
  }