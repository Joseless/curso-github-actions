import { IsString, IsEmail, IsNotEmpty } from 'class-validator';

export class CreateLeadDto {
  @IsNotEmpty()
  @IsString()
  propertyId: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  phone: string;

  @IsString()
  message?: string;
}

