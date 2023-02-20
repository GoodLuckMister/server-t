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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const type_graphql_1 = require("type-graphql");
const contact_schema_1 = require("../schema/contact.schema");
const contact_service_1 = __importDefault(require("../service/contact.service"));
let ContactResolver = class ContactResolver {
    constructor(contactService) {
        this.contactService = contactService;
        this.contactService = new contact_service_1.default();
    }
    createContact(input, context) {
        const user = context.user;
        Object.assign(input, { user: user });
        return this.contactService.createContact(input);
    }
    updateContact(input, context) {
        const user = context.user;
        Object.assign(input, { user: user });
        return this.contactService.updateContact(input);
    }
    async deleteContact(input) {
        const contact = await this.contactService.deleteContact(input);
        return Boolean(contact.raw);
    }
    contacts() {
        return this.contactService.findContact();
    }
    myContacts(context) {
        const user = context.user;
        return this.contactService.findMyContact(user._id);
    }
    contact(input) {
        return this.contactService.findSingleContact(input);
    }
};
__decorate([
    (0, type_graphql_1.Authorized)(),
    (0, type_graphql_1.Mutation)(() => contact_schema_1.Contact),
    __param(0, (0, type_graphql_1.Arg)("input")),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [contact_schema_1.CreateContactInput, Object]),
    __metadata("design:returntype", void 0)
], ContactResolver.prototype, "createContact", null);
__decorate([
    (0, type_graphql_1.Authorized)(),
    (0, type_graphql_1.Mutation)(() => contact_schema_1.Contact),
    __param(0, (0, type_graphql_1.Arg)("input")),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [contact_schema_1.UpdateContactInput, Object]),
    __metadata("design:returntype", void 0)
], ContactResolver.prototype, "updateContact", null);
__decorate([
    (0, type_graphql_1.Authorized)(),
    (0, type_graphql_1.Mutation)(() => Boolean),
    __param(0, (0, type_graphql_1.Arg)("input")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [contact_schema_1.GetContactInput]),
    __metadata("design:returntype", Promise)
], ContactResolver.prototype, "deleteContact", null);
__decorate([
    (0, type_graphql_1.Authorized)(),
    (0, type_graphql_1.Query)(() => [contact_schema_1.Contact], { nullable: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ContactResolver.prototype, "contacts", null);
__decorate([
    (0, type_graphql_1.Authorized)(),
    (0, type_graphql_1.Query)(() => [contact_schema_1.Contact], { nullable: true }),
    __param(0, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ContactResolver.prototype, "myContacts", null);
__decorate([
    (0, type_graphql_1.Authorized)(),
    (0, type_graphql_1.Query)(() => contact_schema_1.Contact, { nullable: true }),
    __param(0, (0, type_graphql_1.Arg)("input")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [contact_schema_1.GetContactInput]),
    __metadata("design:returntype", void 0)
], ContactResolver.prototype, "contact", null);
ContactResolver = __decorate([
    (0, type_graphql_1.Resolver)(),
    __metadata("design:paramtypes", [contact_service_1.default])
], ContactResolver);
exports.default = ContactResolver;
