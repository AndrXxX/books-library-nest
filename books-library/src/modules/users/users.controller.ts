import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from "src/modules/users/users.service";
import { DtoValidationPipe } from "src/validators/dto.validation.pipe";
import { CreateUserDto } from "./interfaces/user-create.interface";
import { SigninUserDto } from "./interfaces/user-signin.interface";

@Controller('api/users')
export class UsersController {
  constructor(private usersService: UsersService) {
  }

  @Post("signup")
  async signup(@Body(DtoValidationPipe) createUserDto: CreateUserDto) {
    return await this.usersService.create(createUserDto);
  }

  @Post("signin")
  async signin(@Body(DtoValidationPipe) signinUserDto: SigninUserDto) {
    console.log(signinUserDto); // TODO
  }
}
