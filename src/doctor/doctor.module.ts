import { Module } from '@nestjs/common';
import { DoctorService } from './doctor.service';
import { DoctorController } from './doctor.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Doctors } from './entities/doctor.entity';
import { EntradasModule } from 'src/entradas/entrada.module';

@Module({
  imports: [TypeOrmModule.forFeature([Doctors]), EntradasModule],
  controllers: [DoctorController],
  providers: [DoctorService],
})
export class DoctorModule {}
