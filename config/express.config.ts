import { registerAs } from '@nestjs/config';

export default registerAs('express', () => ({
  port: parseInt(process.env.EXPRESS_PORT, 10) || 3000,
}));
