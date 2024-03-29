import { IsDefined, IsEmail, IsString, Length } from "class-validator";

export class CreateUserDto {
  @IsDefined() @IsString() @IsEmail()
  email: string;

  @IsDefined() @IsString() @Length(10)
  password: string;

  @IsDefined() @IsString() @Length(3)
  firstName: string;

  @IsDefined() @IsString() @Length(3)
  lastName: string;
}
