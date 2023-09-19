import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { AuthController } from './auth/auth.controller';

import { ConfigModule } from '@nestjs/config';
import { GoogleStrategy } from './services/auth/google-strategy.service';


@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController, AuthController],
  providers: [AppService, GoogleStrategy],
})
export class AppModule {}
