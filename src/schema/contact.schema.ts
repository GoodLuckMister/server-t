import { Field, InputType, ObjectType } from "type-graphql";
import { IsEmail } from "class-validator";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { User } from "./user.schema";

@Entity("contact")
@ObjectType()
export class Contact extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field(() => String)
  _id: string;

  @Column()
  @Field(() => String)
  name: string;

  @Column()
  @Field(() => String)
  address: string;

  @Column()
  @Field(() => String)
  phone: string;

  @Column()
  @Field(() => String)
  email: string;

  @CreateDateColumn({
    nullable: false,
    name: "created_at",
  })
  created_at: Date;

  @UpdateDateColumn({
    nullable: false,
    name: "updated_at",
  })
  updated_at: Date;

  @Field(() => User!)
  @ManyToOne(() => User, { eager: true })
  user: User;
}

@InputType()
export class CreateContactInput {
  @Field()
  name: string;

  @Field()
  address: string;

  @IsEmail()
  @Field()
  email: string;

  @Field()
  phone: string;
}

@InputType()
export class GetContactInput {
  @Field()
  contactId: string;
}

@InputType()
export class UpdateContactInput {
  @Field()
  name: string;

  @Field()
  address: string;

  @IsEmail()
  @Field()
  email: string;

  @Field()
  phone: string;

  @Field()
  contactId: string;
}
