import { INestApplication } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as helmet from 'helmet';
import { BaseConfig } from '../interfaces/base-config.interface';

export default (app: INestApplication) => {
  const configService = app.get(ConfigService);
  const vdbConfig = configService.get<BaseConfig>('base');
  if (vdbConfig.isProduction) {
    app.use(helmet());
  }
};
