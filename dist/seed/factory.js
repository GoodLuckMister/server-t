"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const faker_1 = require("@faker-js/faker");
const typeorm_seeding_1 = require("typeorm-seeding");
const contact_schema_1 = require("./../schema/contact.schema");
const user_schema_1 = require("../schema/user.schema");
(0, typeorm_seeding_1.define)(user_schema_1.User, () => {
    const user = new user_schema_1.User();
    const fakeUser = {
        first_name: faker_1.faker.internet.userName(),
        last_name: faker_1.faker.internet.userName(),
        email: faker_1.faker.internet.email(),
        avatar_img: faker_1.faker.image.avatar(),
        password: faker_1.faker.internet.password(),
        created_at: faker_1.faker.date.past(),
        updated_at: faker_1.faker.date.past(),
    };
    Object.assign(user, fakeUser);
    return user;
});
(0, typeorm_seeding_1.define)(contact_schema_1.Contact, (faker) => {
    const contact = new contact_schema_1.Contact();
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
