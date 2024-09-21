import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateEstoqueDTO {
  @IsNotEmpty()
  @IsString()
  name: string;
  @IsNotEmpty()
  @IsNumber()
  empresaId: number;
  @IsNotEmpty()
  @IsString()
  description: string;
}
