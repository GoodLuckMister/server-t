"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyJwt = exports.signJwt = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const publicKey = Buffer.from(process.env.PUBLIC_KEY, "base64").toString("ascii");
const privateKey = Buffer.from(process.env.PRIVATE_KEY, "base64").toString("ascii");
function signJwt(object, options) {
    return jsonwebtoken_1.default.sign(JSON.stringify(object), privateKey, {
        ...(options && options),
        algorithm: "RS256",
    });
}
exports.signJwt = signJwt;
function verifyJwt(token) {
    try {
        const decoded = jsonwebtoken_1.default.verify(token, publicKey);
        return decoded;
    }
    catch (e) {
        return null;
    }
}
exports.verifyJwt = verifyJwt;
