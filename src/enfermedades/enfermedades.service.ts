import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEnfermedadDto } from './dto/create-enfermedades.dto';
import { UpdateEnfermedadDto } from './dto/update-enfermedades.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Enfermedad } from './entities/enfermedad.entity';
import { Like, Repository } from 'typeorm';

@Injectable()
export class EnfermedadService {
  constructor(
    @InjectRepository(Enfermedad)
    private enfermedadRepository: Repository<Enfermedad>,
  ) {}

  async create(createEnfermedadDto: CreateEnfermedadDto) {
    const enfermedad = this.enfermedadRepository.create(createEnfermedadDto);
    return await this.enfermedadRepository.save(enfermedad);
  }

  findAll() {
    return this.enfermedadRepository.find({ where: { isDeleted: false } });
  }

  async findOne(id: number) {
    const patient = await this.enfermedadRepository.findOne({
      where: { id: +id, isDeleted: false },
    });
    if (!patient) {
      throw new NotFoundException(`Patient with ID ${id} not found`);
    }
    return patient;
  }

  update(id: number, updateEnfermedadDto: UpdateEnfermedadDto) {
    return `This action updates a #${id} patient`;
  }

  async remove(id: number) {
    const patient = await this.findOne(id);
    patient.isDeleted = true; //Soft delete
    return this.enfermedadRepository.save(patient);
  }
  //para consultar por nombre de enfermedad
  async findByText(text: string): Promise<Enfermedad[]> {
    return this.enfermedadRepository.find({
      where: { name: Like(`%${text}%`) },
    });
  }
}
