import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { iUser } from "src/interfaces/user.interface";
import { Book } from "src/modules/books/mongo.schemas/book.schema";

export type UserDocument = HydratedDocument<Book>;

@Schema()
export class User implements iUser {
  @Prop( { required: [true, 'Не указан email'], unique: [true, 'Пользователь с таким email уже есть'] })
  email: string;

  @Prop( { required: [true, 'Не указано имя'] })
  firstName: string;

  @Prop( { required: [true, 'Не указана фамилия'] })
  lastName: string;

  @Prop( { required: [true, 'Не указан пароль'] })
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
