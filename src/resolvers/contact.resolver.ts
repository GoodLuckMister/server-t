import { Arg, Authorized, Ctx, Mutation, Query, Resolver } from "type-graphql";
import {
  CreateContactInput,
  GetContactInput,
  Contact,
  UpdateContactInput,
} from "../schema/contact.schema";
import ContactService from "../service/contact.service";
import Context from "../types/context";

@Resolver()
export default class ContactResolver {
  constructor(private contactService: ContactService) {
    this.contactService = new ContactService();
  }

  @Authorized()
  @Mutation(() => Contact)
  createContact(@Arg("input") input: CreateContactInput, @Ctx() context: Context) {
    const user = context.user!;
    Object.assign(input, { user: user });
    return this.contactService.createContact(input);
  }

  @Authorized()
  @Mutation(() => Contact)
  updateContact(@Arg("input") input: UpdateContactInput, @Ctx() context: Context) {
    const user = context.user!;
    Object.assign(input, { user: user });
    return this.contactService.updateContact(input);
  }

  @Authorized()
  @Query(() => [Contact], { nullable: true })
  contacts() {
    return this.contactService.findContact();
  }

  @Authorized()
  @Query(() => [Contact], { nullable: true })
  myContacts(@Ctx() context: Context) {
    const user = context.user!;
    return this.contactService.findMyContact(user._id);
  }

  @Authorized()
  @Query(() => Contact, { nullable: true })
  contact(@Arg("input") input: GetContactInput) {
    return this.contactService.findSingleContact(input);
  }
}
