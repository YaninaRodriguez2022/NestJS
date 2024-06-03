import { Module } from '@nestjs/common';
import { PatientsService } from './patients.service';
import { PatientsController } from './patients.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Patients } from 'src/patients/entities/patient.entity';
import { HistoryClinical } from 'src/history-clinical/entities/historyClinical.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Patients, HistoryClinical])],
  controllers: [PatientsController],
  providers: [PatientsService],
})
export class PatientsModule {}
