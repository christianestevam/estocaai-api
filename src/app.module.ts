import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { EmpresaModule } from './empresa/empresa.module';

@Module({
  imports: [AuthModule, EmpresaModule],
})
export class AppModule {}
