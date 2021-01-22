import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { AppLoggerService } from './common/modules/app-logger/app-logger.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly appLoggerService: AppLoggerService,
  ) {
    this.appLoggerService.setContext(AppController.name);
  }

  @Get()
  getHello(): string {
    this.appLoggerService.debug('Del más allá y más acá');
    return this.appService.getHello();
  }
}
