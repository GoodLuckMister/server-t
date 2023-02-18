import { Factory, Seeder } from "typeorm-seeding";
import { Connection } from "typeorm";

import { Contact } from "./../schema/contact.schema";
import { User } from "../schema/user.schema";

export default class InitialDatabaseSeed implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<void> {
    const users = await factory(User)().createMany(15);

    await factory(Contact)().createMany(2);
  }
}
