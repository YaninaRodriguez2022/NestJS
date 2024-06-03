import { Module } from '@nestjs/common';
import { EnfermedadService } from './enfermedades.service';
import { EnfermedadController } from './enfermedades.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Enfermedad } from './entities/enfermedad.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Enfermedad])],
  controllers: [EnfermedadController],
  providers: [EnfermedadService],
})
export class EnfermedadModule {}
