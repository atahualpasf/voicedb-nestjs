import { registerAs } from '@nestjs/config';

export default registerAs('express', () => ({
  ip: process.env.EXPRESS_IP,
  port: parseInt(process.env.EXPRESS_PORT, 10) || 3000,
}));
