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
exports.UpdateContactInput = exports.GetContactInput = exports.CreateContactInput = exports.Contact = void 0;
const type_graphql_1 = require("type-graphql");
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
const user_schema_1 = require("./user.schema");
let Contact = class Contact extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    (0, type_graphql_1.Field)(() => String),
    __metadata("design:type", String)
], Contact.prototype, "_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, type_graphql_1.Field)(() => String),
    __metadata("design:type", String)
], Contact.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, type_graphql_1.Field)(() => String),
    __metadata("design:type", String)
], Contact.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, type_graphql_1.Field)(() => String),
    __metadata("design:type", String)
], Contact.prototype, "phone", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, type_graphql_1.Field)(() => String),
    __metadata("design:type", String)
], Contact.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, type_graphql_1.Field)(() => Date),
    (0, typeorm_1.CreateDateColumn)({
        nullable: false,
        name: "created_at",
    }),
    __metadata("design:type", Date)
], Contact.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, type_graphql_1.Field)(() => Date),
    (0, typeorm_1.UpdateDateColumn)({
        nullable: false,
        name: "updated_at",
    }),
    __metadata("design:type", Date)
], Contact.prototype, "updated_at", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => user_schema_1.User),
    (0, typeorm_1.ManyToOne)(() => user_schema_1.User, { eager: true }),
    __metadata("design:type", user_schema_1.User)
], Contact.prototype, "user", void 0);
Contact = __decorate([
    (0, typeorm_1.Entity)("contact"),
    (0, type_graphql_1.ObjectType)()
], Contact);
exports.Contact = Contact;
let CreateContactInput = class CreateContactInput {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], CreateContactInput.prototype, "name", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], CreateContactInput.prototype, "address", void 0);
__decorate([
    (0, class_validator_1.IsEmail)(),
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], CreateContactInput.prototype, "email", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], CreateContactInput.prototype, "phone", void 0);
CreateContactInput = __decorate([
    (0, type_graphql_1.InputType)()
], CreateContactInput);
exports.CreateContactInput = CreateContactInput;
let GetContactInput = class GetContactInput {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], GetContactInput.prototype, "contactId", void 0);
GetContactInput = __decorate([
    (0, type_graphql_1.InputType)()
], GetContactInput);
exports.GetContactInput = GetContactInput;
let UpdateContactInput = class UpdateContactInput {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], UpdateContactInput.prototype, "name", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], UpdateContactInput.prototype, "address", void 0);
__decorate([
    (0, class_validator_1.IsEmail)(),
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], UpdateContactInput.prototype, "email", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], UpdateContactInput.prototype, "phone", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], UpdateContactInput.prototype, "contactId", void 0);
UpdateContactInput = __decorate([
    (0, type_graphql_1.InputType)()
], UpdateContactInput);
exports.UpdateContactInput = UpdateContactInput;
