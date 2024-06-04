import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { UpdateDoctorDto } from './dto/update-doctor.dto';
import { Doctors } from './entities/doctor.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Entrada } from 'src/entradas/entities/entrada.entity';
import { EntradaService,  } from 'src/entradas/entrada.service';

@Injectable()
export class DoctorService {
  constructor(
    @InjectRepository(Doctors)
    private doctorsRepository: Repository<Doctors>,
    private entradaService: EntradaService,
  ) {}

  async create(createDoctorDto: CreateDoctorDto) {
    const doctor = this.doctorsRepository.create(createDoctorDto);
    return await this.doctorsRepository.save(doctor);
  }
  findAll() {
    return this.doctorsRepository.find({ where: { isDeleted: false } });
  }

  async findOne(id: number) {
    const doctor = await this.doctorsRepository.findOne({
      where: { id, isDeleted: false },
    });
    if (!doctor) {
      throw new NotFoundException(`Patient with ID ${id} not found`);
    }
    return doctor;
  }

  update(id: number, updateDoctorDto: UpdateDoctorDto) {
    return `This action updates a #${id} doctor`;
  }

  async remove(id: number) {
    const doctor = await this.findOne(id);
    doctor.isDeleted = true; //Soft delete
    return this.doctorsRepository.save(doctor);
  }
  async hardRemove(id: number){
    await this.entradaService.hardRemoveDoctorEntries(+id);
    await this.doctorsRepository.delete(id);
  }
}
