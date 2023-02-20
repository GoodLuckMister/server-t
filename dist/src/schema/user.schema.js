"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteUserInput = exports.LoginInput = exports.CreateUserInput = exports.User = void 0;
const contact_schema_1 = require("./contact.schema");
const typeorm_1 = require("typeorm");
const class_validator_1 = require("class-validator");
const type_graphql_1 = require("type-graphql");
let User = class User extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    (0, type_graphql_1.Field)(() => String),
    __metadata("design:type", String)
], User.prototype, "_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, type_graphql_1.Field)(() => String),
    __metadata("design:type", String)
], User.prototype, "first_name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, type_graphql_1.Field)(() => String),
    __metadata("design:type", String)
], User.prototype, "last_name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, type_graphql_1.Field)(() => String),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String),
    (0, typeorm_1.Column)({ default: "img", nullable: true }),
    __metadata("design:type", String)
], User.prototype, "avatar_img", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, type_graphql_1.Field)(() => Date),
    (0, typeorm_1.CreateDateColumn)({
        nullable: false,
        name: "created_at",
    }),
    __metadata("design:type", Date)
], User.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, type_graphql_1.Field)(() => Date),
    (0, typeorm_1.UpdateDateColumn)({
        nullable: false,
        name: "updated_at",
    }),
    __metadata("design:type", Date)
], User.prototype, "updated_at", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [contact_schema_1.Contact]),
    (0, typeorm_1.OneToMany)(() => contact_schema_1.Contact, (contact) => contact.user),
    __metadata("design:type", Array)
], User.prototype, "contacts", void 0);
User = __decorate([
    (0, typeorm_1.Entity)("user"),
    (0, type_graphql_1.ObjectType)()
], User);
exports.User = User;
let CreateUserInput = class CreateUserInput {
};
__decorate([
    (0, type_graphql_1.Field)(() => String),
    __metadata("design:type", String)
], CreateUserInput.prototype, "first_name", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String),
    __metadata("design:type", String)
], CreateUserInput.prototype, "last_name", void 0);
__decorate([
    (0, class_validator_1.IsEmail)(),
    (0, type_graphql_1.Field)(() => String),
    __metadata("design:type", String)
], CreateUserInput.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.MinLength)(6, {
        message: "password must be at least 6 characters long",
    }),
    (0, class_validator_1.MaxLength)(50, {
        message: "password must not be longer than 50 characters",
    }),
    (0, type_graphql_1.Field)(() => String),
    __metadata("design:type", String)
], CreateUserInput.prototype, "password", void 0);
CreateUserInput = __decorate([
    (0, type_graphql_1.InputType)()
], CreateUserInput);
exports.CreateUserInput = CreateUserInput;
let LoginInput = class LoginInput {
};
__decorate([
    (0, type_graphql_1.Field)(() => String),
    __metadata("design:type", String)
], LoginInput.prototype, "email", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String),
    __metadata("design:type", String)
], LoginInput.prototype, "password", void 0);
LoginInput = __decorate([
    (0, type_graphql_1.InputType)()
], LoginInput);
exports.LoginInput = LoginInput;
let DeleteUserInput = class DeleteUserInput {
};
__decorate([
    (0, type_graphql_1.Field)(() => String),
    __metadata("design:type", String)
], DeleteUserInput.prototype, "_id", void 0);
DeleteUserInput = __decorate([
    (0, type_graphql_1.InputType)()
], DeleteUserInput);
exports.DeleteUserInput = DeleteUserInput;
