import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePracticeDto } from './dto/create-practice.dto';
import { UpdatePracticeDto } from './dto/update-practice.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Practice } from './entities/practice.entity';

@Injectable()
export class PracticeService {
  constructor(
    @InjectRepository(Practice)
    private practiceRepository: Repository<Practice>,
  ) {}

  create(createPracticeDto: CreatePracticeDto) {
    return 'This action adds a new practice';
  }

  findAll() {
    return this.practiceRepository.find({ where: { isDeleted: false } });
  }

  async findOne(id: number) {
    const practice = await this.practiceRepository.findOne({
      where: { id, isDeleted: false },
    });
    if (!practice) {
      throw new NotFoundException(`practice with ID ${id} not found`);
    }
    return practice;
  }

  update(id: number, updatePracticeDto: UpdatePracticeDto) {
    return `This action updates a #${id} practice`;
  }

  async remove(id: number) {
    const practice = await this.findOne(id);
    practice.isDeleted = true; //Soft delete
    return this.practiceRepository.save(practice);
  }
}
