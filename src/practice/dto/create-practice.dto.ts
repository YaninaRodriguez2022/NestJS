import { IsString } from '@nestjs/class-validator';

export class CreatePracticeDto {
  duracion: number;
  @IsString()
  complicaciones: string;
  resultado_final: boolean;
  isDeleted: boolean;
}
