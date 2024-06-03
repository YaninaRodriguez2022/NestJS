import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateHistoryClinicalDto } from './dto/create-historyClinical.dto';
import { UpdateHistoryClinicalDto } from './dto/update-historyClinical.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { HistoryClinical } from './entities/historyClinical.entity';
import { Repository } from 'typeorm';

@Injectable()
export class HistoryClinicalService {
  constructor(
    @InjectRepository(HistoryClinical)
    private historyRepository: Repository<HistoryClinical>,
  ) {}
  async create(createHistoryClinicalDto: CreateHistoryClinicalDto) {
    const history = this.historyRepository.create(createHistoryClinicalDto);
    return await this.historyRepository.save(history);
  }

  findAll() {
    return `This action returns all  history clinical`;
  }

  async findOne(id: number) {
    const history = await this.historyRepository.findOne({
      where: { id, isDeleted: false },
    });
    if (!history) {
      throw new NotFoundException(`entry with ID ${id} not found`);
    }
    return history;
  }

  update(id: number, updateHistoryClinicalDto: UpdateHistoryClinicalDto) {
    return `This action updates a #${id} history clinical`;
  }

  remove(id: number) {
    return `This action removes a #${id} history clinical`;
  }
}
