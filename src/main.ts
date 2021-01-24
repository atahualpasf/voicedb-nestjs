import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import appLoaders from './common/loaders/index.loader';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const expressConfig = configService.get('express');
  await appLoaders(app);
  await app.listen(expressConfig.port, expressConfig.ip);
}
bootstrap();
