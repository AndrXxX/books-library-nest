import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from "src/modules/users/users.service";
import { DtoValidationPipe } from "src/validators/dto.validation.pipe";
import { iCreateUserDto } from "./interfaces/user-create.interface";
import { SigninUserDto } from "./interfaces/user-signin.interface";

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {
  }

  @Post("signup")
  async signup(@Body(DtoValidationPipe) createUserDto: iCreateUserDto) {
    return await this.usersService.create(createUserDto);
  }

  @Post("signin")
  async signin(@Body(DtoValidationPipe) signinUserDto: SigninUserDto) {
    console.log(signinUserDto); // TODO
  }
}
