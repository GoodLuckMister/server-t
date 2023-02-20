"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_1 = require("../utils/mysql");
class ContactService {
    async createContact(input) {
        return mysql_1.contactRepository.save(input);
    }
    async getAllContacts() {
        return mysql_1.contactRepository.find();
    }
    async updateContact(input) {
        await mysql_1.contactRepository.update(input.contactId, {
            ...(input.name && { name: input.name }),
            ...(input.email && { email: input.email }),
            ...(input.address && { address: input.address }),
            ...(input.phone && { phone: input.phone }),
        });
        return mysql_1.contactRepository.findOne({ where: { _id: input.contactId } });
    }
    async deleteContact(input) {
        return mysql_1.contactRepository.delete({ _id: input.contactId });
    }
    async findContact() {
        // Pagination login
        return mysql_1.contactRepository.find();
    }
    async findSingleContact(input) {
        return await mysql_1.contactRepository.findOneBy({
            _id: input.contactId,
        });
    }
    async findMyContact(id) {
        return await mysql_1.contactRepository.find({
            relations: ["user"],
            where: {
                user: { _id: id },
            },
        });
    }
}
exports.default = ContactService;
