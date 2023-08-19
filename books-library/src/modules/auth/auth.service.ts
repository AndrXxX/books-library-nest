import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUserById(id: number): Promise<any> {
    const user = await this.usersService.findOne({ id });
    if (user) {
      return user;
    }
    return null;
  }

  async validateUserByCredentials(email: string, password: string): Promise<any> {
    const user = await this.usersService.findOne({ email });
    if (user && user.password === password) { // TODO
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  createToken(payload: any) {
    return this.jwtService.sign(payload);
  }
}
