import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateConsultDto } from './dto/create-consult.dto';
import { UpdateConsultDto } from './dto/update-consult.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Consult } from './entities/consult.entity';

@Injectable()
export class ConsultService {
  constructor(
    @InjectRepository(Consult)
    private consultRepository: Repository<Consult>,
  ) {}

  async create(createConsultDto: CreateConsultDto) {
    const consult = this.consultRepository.create(createConsultDto);
    return await this.consultRepository.save(consult);
  }

  findAll() {
    return this.consultRepository.find({ where: { isDeleted: false } });
  }

  async findOne(id: number) {
    const consult = await this.consultRepository.findOne({
      where: { id, isDeleted: false },
    });
    if (!consult) {
      throw new NotFoundException(`Patient with ID ${id} not found`);
    }
    return consult;
  }

  update(id: number, updateConsultDto: UpdateConsultDto) {
    return `This action updates a #${id} consult`;
  }

  async remove(id: number) {
    const consult = await this.findOne(id);
    consult.isDeleted = true; //Soft delete
    return this.consultRepository.save(consult);
  }
}
