import { ConfigService } from '@nestjs/config';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as compression from 'compression';
import * as helmet from 'helmet';
import { BaseConfig } from '../interfaces/base-config.interface';

export default (app: NestExpressApplication) => {
  const configService = app.get(ConfigService);
  const vdbConfig = configService.get<BaseConfig>('base');
  // TODO: Evaluate performance of compression
  app.use(compression());
  if (vdbConfig.isProduction) {
    app.use(helmet());
  }
  app.enable('trust proxy');
};
