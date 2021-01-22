import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { validate } from 'src/config/validation';
import expressConfig from 'src/config/express.config';
import { AppLoggerModule } from './common/modules/app-logger/app-logger.module';

const envFilePath = `environments/.env.${process.env.NODE_ENV}`;

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [envFilePath],
      load: [expressConfig],
      validate,
    }),
    AppLoggerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
