import { Contact } from "./contact.schema";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { IsEmail, MaxLength, MinLength } from "class-validator";
import { Field, InputType, ObjectType } from "type-graphql";

@Entity("user")
@ObjectType()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field(() => String)
  _id: string;

  @Column()
  @Field(() => String)
  first_name: string;

  @Column()
  @Field(() => String)
  last_name: string;

  @Column()
  @Field(() => String)
  email: string;

  @Column()
  password: string;

  @Field(() => String)
  @Column({ default: "img", nullable: true })
  avatar_img?: string;

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

  @Field(() => [Contact]!)
  @OneToMany(() => Contact, (contact) => contact.user)
  contacts: Contact[];
}

@InputType()
export class CreateUserInput {
  @Field(() => String)
  first_name: string;

  @Field(() => String)
  last_name: string;

  @IsEmail()
  @Field(() => String)
  email: string;

  @MinLength(6, {
    message: "password must be at least 6 characters long",
  })
  @MaxLength(50, {
    message: "password must not be longer than 50 characters",
  })
  @Field(() => String)
  password: string;
}

@InputType()
export class LoginInput {
  @Field(() => String)
  email: string;

  @Field(() => String)
  password: string;
}

@InputType()
export class DeleteUserInput {
  @Field(() => String)
  _id: string;
}
