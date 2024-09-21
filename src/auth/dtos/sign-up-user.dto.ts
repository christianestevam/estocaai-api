import { IsEmail, IsIn, IsNotEmpty, IsString } from 'class-validator';

export class SignUpUserDTO {
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string;
  @IsNotEmpty()
  @IsString()
  password: string;
  @IsNotEmpty()
  @IsString()
  firstName: string;
  @IsNotEmpty()
  @IsString()
  lastName: string;
  @IsNotEmpty()
  @IsString()
  @IsIn(['ADMIN', 'USER'], {
    message: 'Role must be either ADMIN or USER',
  })
  role: string;
}
