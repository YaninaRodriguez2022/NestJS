import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Patients } from './entities/patient.entity';
import { Repository } from 'typeorm';
import { HistoryClinical } from 'src/history-clinical/entities/historyClinical.entity';

@Injectable()
export class PatientsService {
  constructor(
    @InjectRepository(Patients)
    private patientRepository: Repository<Patients>,
    @InjectRepository(HistoryClinical)
    private readonly historyClinicalRepository: Repository<HistoryClinical>,
  ) {}

  async create(patientData: Partial<Patients>): Promise<Patients> {
    const patient = this.patientRepository.create(patientData);
    return this.patientRepository.save(patient);
  }

  findAll() {
    return this.patientRepository.find({ where: { isDeleted: false } });
  }

  async findOne(id: number) {
    const patient = await this.patientRepository.findOne({
      where: { id, isDeleted: false },
    });
    if (!patient) {
      throw new NotFoundException(`Patient with ID ${id} not found`);
    }
    return patient;
  }

  update(id: number, updatePatientDto: UpdatePatientDto) {
    return `This action updates a #${id} patient`;
  }

  async remove(id: number) {
    const patient = await this.findOne(id);
    patient.isDeleted = true; //Soft delete
    return this.patientRepository.save(patient);
  }

  async getHistoryClinical(id: number) {
    const patient = await this.patientRepository.findOne({ where: { id } });
    if (!patient) {
      throw new NotFoundException('Patient not found');
    }
    return this.historyClinicalRepository.findOne({ where: { patient } });
  }
}
