import { Injectable } from '@nestjs/common';
import { AppLoggerService } from './common/modules/app-logger/app-logger.service';

@Injectable()
export class AppService {
  constructor(private appLoggerService: AppLoggerService) {
    this.appLoggerService.setContext(AppService.name);
  }

  getHello(): string {
    this.appLoggerService.debug('Hola amigos del mundo');
    return 'Hola mundo';
  }
}
