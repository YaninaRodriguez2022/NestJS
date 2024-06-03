import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
} from '@nestjs/class-validator';

export class CreatePatientDto {
  id: number;
  @IsNotEmpty()
  @IsString()
  name: string;
  @IsNotEmpty()
  @IsString()
  surname: string;
  @IsEmail()
  email: string;
  @IsNotEmpty()
  @IsNumber()
  cellphone: number;
  createdAt: Date;
  isDeleted: boolean;
}
