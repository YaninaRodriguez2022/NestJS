import { Module } from '@nestjs/common';
import { ConsultService } from './consult.service';
import { ConsultController } from './consult.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Consult } from './entities/consult.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Consult])],
  controllers: [ConsultController],
  providers: [ConsultService],
})
export class ConsultModule {}
