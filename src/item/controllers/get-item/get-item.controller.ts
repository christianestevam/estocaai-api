import {
  Controller,
  Get,
  Param,
  UseGuards,
  ParseIntPipe,
} from '@nestjs/common';
import { JwtGuard } from 'src/auth/guard/jwt.guard';
import { GetItemService } from 'src/item/service/get-item/get-item.service';

@Controller('/item')
@UseGuards(JwtGuard)
export class GetItemController {
  constructor(private service: GetItemService) {}

  @Get()
  async findAll() {
    return await this.service.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return await this.service.findOne(id);
  }
}
