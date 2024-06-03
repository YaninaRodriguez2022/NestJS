import { IsNotEmpty, IsNumber, IsString } from '@nestjs/class-validator';

export class CreateDoctorDto {
  id: number;

  @IsNotEmpty()
  @IsString()
  firstName: string;

  @IsNotEmpty()
  @IsString()
  lastName: string;

  isActive: boolean;
  @IsNumber()
  matricula: number;
  @IsString()
  especialidad: string;
  isDeleted: boolean;
}
