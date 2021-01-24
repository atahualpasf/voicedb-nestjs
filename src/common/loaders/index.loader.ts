import { INestApplication } from '@nestjs/common';
import middlewaresLoader from './middlewares.loader';

export default async (nestApp: INestApplication) => {
  await middlewaresLoader(nestApp);
};
