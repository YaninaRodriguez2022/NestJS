import { IsString } from '@nestjs/class-validator';

export class CreateHistoryClinicalDto {
  id: number;
  @IsString()
  additionalNotes: string; // Notas adicionales, opcional
  createdAt: Date;
  isDeleted: boolean;
}
