import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { iUser } from "src/interfaces/user.interface";
import { Book } from "src/modules/books/mongo.schemas/book.schema";

export type UserDocument = HydratedDocument<Book>;

@Schema()
export class User implements iUser {
  @Prop( { required: [true, 'Не указан email'] })
  email: string;

  @Prop( { required: [true, 'Не указан firstName'] })
  firstName: string;

  @Prop( { required: [true, 'Не указан пароль'] })
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
