import { IsBoolean, IsString } from '@nestjs/class-validator';

export class CreateEnfermedadDto {
  id: number;
  @IsString()
  name: string;

  @IsBoolean()
  isDeleted: boolean;
}
