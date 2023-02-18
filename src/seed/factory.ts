import { faker } from "@faker-js/faker";
import { define } from "typeorm-seeding";
import { Contact } from "./../schema/contact.schema";
import { User } from "../schema/user.schema";

define(User, () => {
  const user = new User();
  const fakeUser = {
    first_name: faker.internet.userName(),
    last_name: faker.internet.userName(),
    email: faker.internet.email(),
    avatar_img: faker.image.avatar(),
    password: faker.internet.password(),
    created_at: faker.date.past(),
    updated_at: faker.date.past(),
  };
  Object.assign(user, fakeUser);

  return user;
});

define(Contact, (faker) => {
  const contact = new Contact();
  const fakeContact = {
    name: faker.internet.userName(),
    address: faker.address.city(),
    email: faker.internet.email(),
    phone: faker.phone.phoneNumber(),
    created_at: faker.date.past(),
    updated_at: faker.date.past(),
  };
  Object.assign(contact, fakeContact);

  return contact;
});
