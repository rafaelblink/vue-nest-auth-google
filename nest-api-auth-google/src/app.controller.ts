/* eslint-disable @typescript-eslint/no-unused-vars */
import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('cats')
@UseGuards(AuthGuard('google'))
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAll(@Req() req: any) {
    console.log(req.user);
    return {};
  }
}
