import { Module } from '@nestjs/common';
import { RxjsExampleController } from "./rxjs-example.controller";
import { RxjsExampleService } from "./rxjs-example.service";

@Module({
  imports: [],
  controllers: [RxjsExampleController],
  providers: [RxjsExampleService],
  exports: [RxjsExampleService],
})
export class RxjsExampleModule {

}
