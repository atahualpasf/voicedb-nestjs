import { registerAs } from '@nestjs/config';
import { Environment } from 'src/common/enums/node-env-enum';

export default registerAs('vdb', () => ({
  isProduction: process.env.NODE_ENV === Environment.Production,
  authSecret: process.env.AUTH_SECRET,
  resetSecret: process.env.RESET_SECRET,
}));
