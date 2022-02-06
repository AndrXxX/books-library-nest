import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ required: [true, 'Не указан логин'] })
  public username: string;

  @Prop({ required: [true, 'Не указан пароль'] })
  public password: string;

  @Prop({ required: [true, 'Не указан email'] })
  public email: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
