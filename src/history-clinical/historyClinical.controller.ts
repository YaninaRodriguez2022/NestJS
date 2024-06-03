import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { HistoryClinicalService } from './historyClinical.service';
import { CreateHistoryClinicalDto } from './dto/create-historyClinical.dto';
import { UpdateHistoryClinicalDto } from './dto/update-historyClinical.dto';

@Controller('historiaclinica')
export class HistoryClinicalController {
  constructor(
    private readonly historyClinicalService: HistoryClinicalService,
  ) {}

  @Post()
  create(@Body() createHistoryClinicalDto: CreateHistoryClinicalDto) {
    return this.historyClinicalService.create(createHistoryClinicalDto);
  }

  @Get()
  findAll() {
    return this.historyClinicalService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.historyClinicalService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateHistoryClinicalDto: UpdateHistoryClinicalDto,
  ) {
    return this.historyClinicalService.update(+id, updateHistoryClinicalDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.historyClinicalService.remove(+id);
  }
}
