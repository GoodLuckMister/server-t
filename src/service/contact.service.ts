import { CreateContactInput, GetContactInput } from "../schema/contact.schema";

import { contactRepository } from "../utils/mysql";

class ContactService {
  async createContact(input: CreateContactInput) {
    return contactRepository.save(input);
  }

  async getAllContacts() {
    return contactRepository.find();
  }

  async updateContact(input: CreateContactInput) {
    return contactRepository.save(input);
  }

  async deleteContact(id: string) {
    return contactRepository.delete({ _id: id });
  }

  async findContact() {
    // Pagination login
    return contactRepository.find();
  }

  async findSingleContact(input: GetContactInput) {
    return await contactRepository.findOneBy({
      _id: input.contactId,
    });
  }

  async findMyContact(id: string) {
    console.log(id);
    return await contactRepository.find({
      relations: ["user"],
      where: {
        user: { _id: id },
      },
    });
  }
}

export default ContactService;
