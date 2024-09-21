import { Module } from '@nestjs/common';
import { SignUpUserService } from './services/sign-up-user/sign-up-user.service';
import { SignUpUserController } from './controllers/sign-up-user/sign-up-user.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [PrismaService, SignUpUserService],
  controllers: [SignUpUserController],
})
export class AuthModule {}
