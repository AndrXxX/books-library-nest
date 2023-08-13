import { NestFactory } from '@nestjs/core';
import { UnifiedExceptionFilter } from "src/filters/unified.exception.filter";
import { FormatResponseInterceptorInterceptor } from "src/interceptors/format-response.interceptor";
import { AppModule } from './app.module';
import config from './config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new UnifiedExceptionFilter());
  app.useGlobalInterceptors(new FormatResponseInterceptorInterceptor());
  await app.listen(config.port);
}
bootstrap();
