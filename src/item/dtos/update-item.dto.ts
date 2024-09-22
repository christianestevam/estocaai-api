import { IsString, IsNumber, IsOptional } from 'class-validator';

export class UpdateItemDto {
  @IsOptional()
  @IsString()
  name: string;
  @IsOptional()
  @IsString()
  description: string;
  @IsOptional()
  @IsNumber()
  quantity: number;
  @IsOptional()
  @IsNumber()
  price: number;
}
