import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEntradaDto } from './dto/create-entrada.dto';
import { UpdateEntradaDto } from './dto/update-entrada.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Entrada } from './entities/entrada.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EntradaService {
  constructor(
    @InjectRepository(Entrada)
    private entradaRepository: Repository<Entrada>,
  ) {}

  async create(_createEntradaDto: CreateEntradaDto) {
    const entrada = this.entradaRepository.create(_createEntradaDto);
    return await this.entradaRepository.save(entrada);
  }

  findAll() {
    return this.entradaRepository.find({ where: { isDeleted: false } });
  }

  async findOne(id: number) {
    const entrada = await this.entradaRepository.findOne({
      where: { id, isDeleted: false },
    });
    if (!entrada) {
      throw new NotFoundException(`entry with ID ${id} not found`);
    }
    return entrada;
  }

  async update(id: number, updateEntradaDto: UpdateEntradaDto) {
    const entrada = await this.findOne(id);
    if (!entrada) {
      throw new NotFoundException(`Entry with ID ${id} not found`);
    }
    const updatedEntrada = { ...entrada, ...updateEntradaDto };
    return this.entradaRepository.save(updatedEntrada);
  }

  async remove(id: number) {
    const entrada = await this.findOne(id);
    entrada.isDeleted = true; //Soft delete
    return this.entradaRepository.save(entrada);
  }
  async hardRemoveDoctorEntries(doctorId: number): Promise<void> {
    await this.entradaRepository
      .createQueryBuilder()
      .update(Entrada)
      .set({ doctor: null })
      .where('doctorId = :doctorId', { doctorId })
      .execute();
  }
}
