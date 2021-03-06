import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import config from '../config';
import { UserModule } from '../user/user.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  imports: [
    UserModule,
    JwtModule.register({
      secret: config.jwt.secret,
      signOptions: config.jwt.signOptions,
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
