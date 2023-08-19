import { Request, Body, Controller, Post, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from "src/modules/auth/guards/local.auth.guard";
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

  @UseGuards(LocalAuthGuard)
  @Post("signin")
  async signin(
    @Body(DtoValidationPipe) signinUserDto: SigninUserDto,
    @Request() req,
  ) {
    return signinUserDto; // TODO: return token
  }
}
