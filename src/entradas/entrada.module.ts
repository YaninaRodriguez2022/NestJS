import { Module } from '@nestjs/common';
import { EntradaService } from './entrada.service';
import { EntradaController } from './entrada.controller';
import { Entrada } from './entities/entrada.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DoctorModule } from 'src/doctor/doctor.module';

@Module({
  imports: [TypeOrmModule.forFeature([Entrada])],
  controllers: [EntradaController],
  providers: [EntradaService, EntradaService],
  exports: [EntradaService],
})
export class EntradasModule {}
