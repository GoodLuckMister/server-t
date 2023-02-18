import UserResolver from "./user.resolver";
import ContactResolver from "./contact.resolver";

export const resolvers = [UserResolver, ContactResolver] as const;
