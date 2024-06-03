import { Module } from '@nestjs/common';
import { HistoryClinicalService } from './historyClinical.service';
import { HistoryClinicalController } from './historyClinical.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HistoryClinical } from './entities/historyClinical.entity';

@Module({
  imports: [TypeOrmModule.forFeature([HistoryClinical])],
  controllers: [HistoryClinicalController],
  providers: [HistoryClinicalService],
})
export class HistoryClinicalModule {}
