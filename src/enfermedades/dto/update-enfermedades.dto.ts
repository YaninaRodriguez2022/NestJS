import { PartialType } from '@nestjs/mapped-types';
import { CreateEnfermedadDto } from './create-enfermedades.dto';

export class UpdateEnfermedadDto extends PartialType(CreateEnfermedadDto) {}
