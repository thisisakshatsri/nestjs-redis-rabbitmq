import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  getHello(): any {
    throw new Error('Method not implemented.');
  }
  constructor(private readonly appService: AppService) {}

  @Get('cache/:key/:value')
  async cache(@Param('key') key: string, @Param('value') value: string) {
    await this.appService.cacheData(key, value);
    return 'Cached!';
  }

  @Get('get/:key')
  async get(@Param('key') key: string) {
    return await this.appService.getCachedData(key);
  }
}
