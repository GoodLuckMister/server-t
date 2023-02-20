"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const contact_schema_1 = require("./../schema/contact.schema");
const user_schema_1 = require("../schema/user.schema");
class InitialDatabaseSeed {
    async run(factory, connection) {
        const users = await factory(user_schema_1.User)().createMany(15);
        await factory(contact_schema_1.Contact)().createMany(2);
    }
}
exports.default = InitialDatabaseSeed;
