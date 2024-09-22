import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class GetItemService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return await this.prisma.item.findMany();
  }

  async findOne(id: number) {
    const item = await this.prisma.item.findUnique({
      where: { id },
    });
    if (!item) {
      throw new NotFoundException('Item not found');
    }
    return item;
  }
}
