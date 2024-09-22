import { Controller, Get, UseGuards } from '@nestjs/common';
import { User } from '@prisma/client';
import { GetUser } from 'src/auth/decorators/get-user.decorator';
import { JwtGuard } from 'src/auth/guard/jwt.guard';

@Controller('auth/get-me')
@UseGuards(JwtGuard)
export class GetUserController {
  @Get()
  async handle(@GetUser() user: User) {
    return user;
  }
}
