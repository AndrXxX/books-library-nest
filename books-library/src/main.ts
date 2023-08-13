import { NestFactory } from '@nestjs/core';
import { FormatResponseInterceptorInterceptor } from "src/app.format-response.interceptor";
import { UnifiedExceptionFilter } from "src/filters/unified.exception.filter";
import { AppModule } from './app.module';
import config from './config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new UnifiedExceptionFilter());
  app.useGlobalInterceptors(new FormatResponseInterceptorInterceptor());
  await app.listen(config.port);
}
bootstrap();
