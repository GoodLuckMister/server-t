import { DataSource } from "typeorm";
import { User } from "../schema/user.schema";
import { Contact } from "../schema/contact.schema";

const MysqlDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "root",
  database: "test",
  entities: [User, Contact],
  synchronize: true,
  //   logging: true,
});

export const userRepository = MysqlDataSource.manager.getRepository(User);

export const contactRepository = MysqlDataSource.manager.getRepository(Contact);

export default MysqlDataSource;
