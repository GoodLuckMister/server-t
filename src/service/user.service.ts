import { ApolloError } from "apollo-server-errors";
import bcrypt from "bcrypt";
import { CreateUserInput, LoginInput, DeleteUserInput } from "../schema/user.schema";

import Context from "../types/context";
import { signJwt } from "../utils/jwt";
import { userRepository, contactRepository } from "../utils/mysql";

class UserService {
  async createUser(input: CreateUserInput) {
    const salt = await bcrypt.genSalt(10);

    const hash = await bcrypt.hashSync(input.password, salt);

    input.password = hash;

    return userRepository.save(input);
  }

  async getAllUsers() {
    return userRepository.find();
  }

  async deleteUser(input: DeleteUserInput) {
    await contactRepository.delete({ user: { _id: input._id } });
    return userRepository.delete({ _id: input._id });
  }

  async login(input: LoginInput, context: Context) {
    try {
      const e = "Invalid email or password";

      // Get our user by email
      const user = await userRepository.findOneBy({
        email: input.email,
      });

      if (!user) {
        throw new ApolloError(e);
      }

      // validate the password
      const passwordIsValid = await bcrypt.compare(input.password, user.password);

      if (!passwordIsValid) {
        throw new ApolloError(e);
      }

      // sign a jwt
      const token = signJwt(user);

      console.log(token);

      // set a cookie for the jwt
      context.res.cookie("accessToken", token, {
        maxAge: 3.154e10, // 1 year
        sameSite: "none",
        domain: process.env.CLIENT_DOMAIN || "localhost",
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
      });

      // return the jwt
      return token;
    } catch (e) {
      console.log(e);
    }
  }
}

export default UserService;
