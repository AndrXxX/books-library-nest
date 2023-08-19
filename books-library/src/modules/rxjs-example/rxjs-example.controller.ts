import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from "src/modules/auth/guards/jwt.auth.guard";
import { RxjsExampleService } from "./rxjs-example.service";

@UseGuards(JwtAuthGuard)
@Controller('rxjs-example')
export class RxjsExampleController {
  constructor(
    private rxjsService: RxjsExampleService)
  {}

  @Get('repositories/:text')
  async repositories(@Param() { text }) {
    return await this.rxjsService.searchRepo(text);
  }
}
