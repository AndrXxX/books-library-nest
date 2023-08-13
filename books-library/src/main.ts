import { NestFactory } from '@nestjs/core';
import { FormatResponseInterceptorInterceptor } from "src/app.format-response.interceptor";
import { AppModule } from './app.module';
import config from './config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new FormatResponseInterceptorInterceptor)
  await app.listen(config.port);
}
bootstrap();
