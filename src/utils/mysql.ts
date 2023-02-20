import { DataSource } from "typeorm";
import { User } from "../schema/user.schema";
import { Contact } from "../schema/contact.schema";

const MysqlDataSource = new DataSource({
  type: "mysql",
  host: process.env.DATABASE_HOST,
  port: Number(process.env.DATABASE_PORT),
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  entities: [User, Contact],
  synchronize: true,
  logging: true,
});

export const userRepository = MysqlDataSource.manager.getRepository(User);

export const contactRepository = MysqlDataSource.manager.getRepository(Contact);

export default MysqlDataSource;
