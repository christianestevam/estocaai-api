import {
  Controller,
  Get,
  Param,
  UnauthorizedException,
  UseGuards,
  ParseIntPipe,
} from '@nestjs/common';
import { User } from '@prisma/client';
import { GetUser } from 'src/auth/decorators/get-user.decorator';
import { JwtGuard } from 'src/auth/guard/jwt.guard';
import { GetItemService } from 'src/item/service/get-item/get-item.service';

@Controller('admin/item')
@UseGuards(JwtGuard)
export class GetItemController {
  constructor(private service: GetItemService) {}

  @Get()
  async findAll(@GetUser() user: User) {
    if (user.role !== 'ADMIN') {
      throw new UnauthorizedException(
        'You do not have permission to access this resource',
      );
    }
    return await this.service.findAll();
  }

  @Get(':id')
  async findOne(@GetUser() user: User, @Param('id', ParseIntPipe) id: number) {
    if (user.role !== 'ADMIN') {
      throw new UnauthorizedException(
        'You do not have permission to access this resource',
      );
    }
    return await this.service.findOne(id);
  }
}
