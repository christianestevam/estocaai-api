import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

interface IRequest {
  name: string;
  CNPJ: string;
  email: string;
  userId: number;
}

@Injectable()
export class CreateEmpresaService {
  constructor(private prisma: PrismaService) {}

  async execute(dto: IRequest) {
    return await this.prisma.empresa.create({
      data: {
        name: dto.name,
        CNPJ: dto.CNPJ,
        email: dto.email,
      },
    });
  }
}
