/* eslint-disable @typescript-eslint/no-unused-vars */
import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AppService } from '../app.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('google')
export class AuthController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @UseGuards(AuthGuard('google'))
  async googleAuth(@Req() req) {}

  @Get('redirect')
  @UseGuards(AuthGuard('google'))
  googleAuthRedirect(@Req() req) {
    const user = this.appService.googleLogin(req);
    console.log(req);
    return {};
  }
}
