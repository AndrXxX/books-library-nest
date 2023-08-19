import { Controller, Get, Param } from '@nestjs/common';
import { RxjsExampleService } from "./rxjs-example.service";

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
