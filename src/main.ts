import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import config from './config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix(config.prefix);
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors({
    origin: [config.cors.origin],
    credentials: config.cors.credentials,
  });
  await app.listen(config.port);
}
bootstrap();
