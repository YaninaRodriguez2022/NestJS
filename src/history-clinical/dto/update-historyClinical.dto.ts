import { PartialType } from '@nestjs/mapped-types';
import { CreateHistoryClinicalDto } from './create-historyClinical.dto';

export class UpdateHistoryClinicalDto extends PartialType(
  CreateHistoryClinicalDto,
) {}
