import { IsBoolean, IsString } from 'class-validator';

export class CreateEnfermedadDto {
  id: number;
  @IsString()
  name: string;

  @IsBoolean()
  isDeleted: boolean;
}
