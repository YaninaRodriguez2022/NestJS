import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { EnfermedadService } from './enfermedades.service';
import { CreateEnfermedadDto } from './dto/create-enfermedades.dto';
import { UpdateEnfermedadDto } from './dto/update-enfermedades.dto';
import { Enfermedad } from './entities/enfermedad.entity';

@Controller('enfermedad')
export class EnfermedadController {
  constructor(private readonly enfermedadService: EnfermedadService) {}

  @Post()
  create(@Body() createEnfermedadDto: CreateEnfermedadDto) {
    return this.enfermedadService.create(createEnfermedadDto);
  }

  @Get()
  findAll() {
    return this.enfermedadService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.enfermedadService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateEnfermedadDto: UpdateEnfermedadDto,
  ) {
    return this.enfermedadService.update(+id, updateEnfermedadDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.enfermedadService.remove(+id);
  }

  @Get('buscar')
  findByText(@Query('text') text: string): Promise<Enfermedad[]> {
    return this.enfermedadService.findByText(text); //..enfermedad/buscar?text=tuTexto
  }
}
