import { CreateContactInput, GetContactInput, UpdateContactInput } from "../schema/contact.schema";

import { contactRepository } from "../utils/mysql";

class ContactService {
  async createContact(input: CreateContactInput) {
    return contactRepository.save(input);
  }

  async getAllContacts() {
    return contactRepository.find();
  }

  async updateContact(input: UpdateContactInput) {
    await contactRepository.update(input.contactId, {
      ...(input.name && { name: input.name }),
      ...(input.email && { email: input.email }),
      ...(input.address && { address: input.address }),
      ...(input.phone && { phone: input.phone }),
    });
    return contactRepository.findOne({ where: { _id: input.contactId } });
  }

  async deleteContact(input: GetContactInput) {
    return contactRepository.delete({ _id: input.contactId });
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
    return await contactRepository.find({
      relations: ["user"],
      where: {
        user: { _id: id },
      },
    });
  }
}

export default ContactService;
