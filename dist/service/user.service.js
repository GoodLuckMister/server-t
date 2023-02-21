"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_errors_1 = require("apollo-server-errors");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jwt_1 = require("../utils/jwt");
const mysql_1 = require("../utils/mysql");
class UserService {
    async createUser(input) {
        const salt = await bcrypt_1.default.genSalt(10);
        const hash = await bcrypt_1.default.hashSync(input.password, salt);
        input.password = hash;
        return mysql_1.userRepository.save(input);
    }
    async getAllUsers() {
        return mysql_1.userRepository.find();
    }
    async deleteUser(input) {
        await mysql_1.contactRepository.delete({ user: { _id: input._id } });
        return mysql_1.userRepository.delete({ _id: input._id });
    }
    async login(input, context) {
        try {
            const e = "Invalid email or password";
            // Get our user by email
            const user = await mysql_1.userRepository.findOneBy({
                email: input.email,
            });
            if (!user) {
                throw new apollo_server_errors_1.ApolloError(e);
            }
            // validate the password
            const passwordIsValid = await bcrypt_1.default.compare(input.password, user.password);
            if (!passwordIsValid) {
                throw new apollo_server_errors_1.ApolloError(e);
            }
            // sign a jwt
            const token = (0, jwt_1.signJwt)(user);
            console.log(token);
            // set a cookie for the jwt
            context.res.cookie("accessToken", token, {
                maxAge: 3.154e10,
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
            });
            // return the jwt
            return token;
        }
        catch (e) {
            console.log(e);
        }
    }
}
exports.default = UserService;
