const { User } = require("./src/schema/user.schema");
const { Contact } = require("./src/schema/contact.schema");

module.exports = {
  username: "root",
  password: "root",
  type: "mysql",
  database: "test",
  host: "localhost",
  port: 3306,
  entities: [User, Contact],
  synchronize: true,
  logging: false,
  seeds: ["src/seed/seed.ts"],
  factories: ["src/seed/factory.ts"],
};
