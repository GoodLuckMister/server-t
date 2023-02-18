import { Arg, Ctx, Mutation, Query, Resolver, Authorized } from "type-graphql";
import { CreateUserInput, LoginInput, User, DeleteUserInput } from "../schema/user.schema";

import UserService from "../service/user.service";
import Context from "../types/context";

@Resolver()
export default class UserResolver {
  constructor(private userService: UserService) {
    this.userService = new UserService();
  }

  @Mutation(() => User)
  createUser(@Arg("input") input: CreateUserInput) {
    return this.userService.createUser(input);
  }

  @Authorized()
  @Mutation(() => Boolean)
  async deleteUser(@Arg("input") input: DeleteUserInput) {
    const user = await this.userService.deleteUser(input);
    return Boolean(user.raw);
  }

  @Mutation(() => String) // Returns the JWT
  login(@Arg("input") input: LoginInput, @Ctx() context: Context) {
    return this.userService.login(input, context);
  }

  @Query(() => User, { nullable: true })
  me(@Ctx() context: Context) {
    return context.user;
  }
  @Authorized()
  @Query(() => [User], { nullable: true })
  getAllUsers() {
    return this.userService.getAllUsers();
  }
}
