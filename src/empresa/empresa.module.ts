import { Module } from '@nestjs/common';
import { CreateEmpresaService } from './services/create-empresa/create-empresa.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtStrategy } from 'src/auth/strategy/jwt.strategy';
import { CreateEmpresaController } from './controllers/create-empresa/create-empresa.controller';

@Module({
  providers: [JwtStrategy, PrismaService, CreateEmpresaService],
  controllers: [CreateEmpresaController],
})
export class EmpresaModule {}
