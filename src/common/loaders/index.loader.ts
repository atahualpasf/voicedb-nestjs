import { NestExpressApplication } from '@nestjs/platform-express';
import middlewaresLoader from './middlewares.loader';

export default async (nestApp: NestExpressApplication) => {
  await middlewaresLoader(nestApp);
};
