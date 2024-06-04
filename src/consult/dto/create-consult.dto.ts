import { IsString } from 'class-validator';

export class CreateConsultDto {
  @IsString()
  motivo_consulta: string;
  @IsString()
  enfermedades: string; //otra tabla mas adelante
  diagnostico: boolean;
  isDeleted: boolean;
}
