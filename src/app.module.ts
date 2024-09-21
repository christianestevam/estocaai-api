import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { EmpresaModule } from './empresa/empresa.module';
import { EstoqueModule } from './estoque/estoque.module';

@Module({
  imports: [AuthModule, EmpresaModule, EstoqueModule],
})
export class AppModule {}
