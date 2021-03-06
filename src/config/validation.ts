import { plainToClass } from 'class-transformer';
import {
  IsEnum,
  IsIP,
  IsNumber,
  IsString,
  validateSync,
} from 'class-validator';
import { Environment } from 'src/common/enums/node-env-enum';

class EnvironmentVariables {
  @IsEnum(Environment)
  NODE_ENV: Environment;

  @IsString()
  AUTH_SECRET: string;

  @IsString()
  RESET_SECRET: string;

  @IsIP()
  EXPRESS_IP: string;

  @IsNumber()
  EXPRESS_PORT: number;
}

export function validate(config: Record<string, unknown>) {
  const validatedConfig = plainToClass(EnvironmentVariables, config, {
    enableImplicitConversion: true,
  });
  const errors = validateSync(validatedConfig, {
    skipMissingProperties: false,
  });

  if (errors.length > 0) {
    throw new Error(errors.toString());
  }
  return validatedConfig;
}
