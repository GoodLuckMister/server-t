"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactRepository = exports.userRepository = void 0;
const typeorm_1 = require("typeorm");
const user_schema_1 = require("../schema/user.schema");
const contact_schema_1 = require("../schema/contact.schema");
const MysqlDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: process.env.DATABASE_HOST,
    port: Number(process.env.DATABASE_PORT),
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    entities: [user_schema_1.User, contact_schema_1.Contact],
    synchronize: true,
    logging: true,
});
exports.userRepository = MysqlDataSource.manager.getRepository(user_schema_1.User);
exports.contactRepository = MysqlDataSource.manager.getRepository(contact_schema_1.Contact);
exports.default = MysqlDataSource;
