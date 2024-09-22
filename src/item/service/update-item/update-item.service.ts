import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateItemDto } from 'src/item/dtos/update-item.dto';

@Injectable()
export class UpdateItemService {
  constructor(private prisma: PrismaService) {}

  async update(id: number, dto: UpdateItemDto) {
    const item = await this.prisma.item.findUnique({
      where: { id },
    });
    if (!item) {
      throw new NotFoundException('Item not found');
    }
    return await this.prisma.item.update({
      where: { id },
      data: {
        nome: dto.name,
        descricao: dto.description,
        quantidade: dto.quantity,
        preco: dto.price,
      },
    });
  }
}
