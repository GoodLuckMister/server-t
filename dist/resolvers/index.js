"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const user_resolver_1 = __importDefault(require("./user.resolver"));
const contact_resolver_1 = __importDefault(require("./contact.resolver"));
exports.resolvers = [user_resolver_1.default, contact_resolver_1.default];
