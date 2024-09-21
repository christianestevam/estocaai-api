import { Module } from '@nestjs/common';
import { SignUpUserService } from './services/sign-up-user/sign-up-user.service';
import { SignUpUserController } from './controllers/sign-up-user/sign-up-user.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { SignInUserService } from './services/sign-in-user/sign-in-user.service';
import { SignTokenService } from './services/sign-token/sign-token.service';
import { SignInUserController } from './controllers/sign-in-user/sign-in-user.controller';
import { JwtService } from '@nestjs/jwt';

@Module({
  providers: [
    JwtService,
    PrismaService,
    SignUpUserService,
    SignInUserService,
    SignTokenService,
  ],
  controllers: [SignUpUserController, SignInUserController],
})
export class AuthModule {}
