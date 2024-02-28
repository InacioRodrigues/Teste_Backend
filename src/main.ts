import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { swaggerConfig } from './config/docs/swagger-config';
import { NestExpressApplication } from '@nestjs/platform-express';
import { HttpExceptionFilter } from './errors/http-exceção.filter';


async function bootstrap() {
  const app = await NestFactory.create <NestExpressApplication>(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new HttpExceptionFilter());
  swaggerConfig(app);
  await app.listen(3000);
}
bootstrap();
