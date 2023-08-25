import { IsDefined, IsEmail, IsString, Length } from "class-validator";

export class SigninUserDto {
  @IsDefined() @IsString() @IsEmail()
  email: string;
  @IsDefined() @IsString() @Length(10)
  password: string;
}
