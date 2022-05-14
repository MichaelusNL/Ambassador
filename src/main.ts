import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import config from './config';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix(config.prefix);
  app.useGlobalPipes(new ValidationPipe());
  app.use(cookieParser());
  app.enableCors({
    origin: [config.cors.origin],
    credentials: config.cors.credentials,
  });
  await app.listen(config.port);
}
bootstrap();
