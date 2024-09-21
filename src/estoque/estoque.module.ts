import { Module } from '@nestjs/common';
import { CreateEstoqueService } from './services/create-estoque/create-estoque.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtStrategy } from 'src/auth/strategy/jwt.strategy';
import { CreateEstoqueController } from './controllers/create-estoque/create-estoque.controller';

@Module({
  providers: [JwtStrategy, PrismaService, CreateEstoqueService],
  controllers: [CreateEstoqueController],
})
export class EstoqueModule {}
