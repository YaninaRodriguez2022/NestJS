import { IsNotEmpty, IsString } from 'class-validator';

export class CreateEntradaDto {
  id: number;
  @IsNotEmpty()
  @IsString()
  @IsString()
  additionalNotes: string; // Notas adicionales, opcional
  surname: string;
  createdAt: Date;
  isDeleted: boolean;
}
