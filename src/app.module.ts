import { Module } from '@nestjs/common';
import config from './config/database/data.source';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PatientsModule } from './patients/patients.module';
import { HistoryClinicalModule } from './history-clinical/history-clinical.module';
import { EntradasModule } from './entradas/entrada.module';
import { DoctorModule } from './doctor/doctor.module';
import { ConsultModule } from './consult/consult.module';
import { PracticeModule } from './practice/practice.module';
import { EnfermedadModule } from './enfermedades/enfermedades.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env.development.local',
      isGlobal: true,
      load: [config],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('database.host'),
        port: configService.get('database.port'),
        username: configService.get('database.username'),
        password: configService.get('database.password'),
        database: configService.get('database.database'),
        autoLoadEntities: true,
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    PatientsModule,
    HistoryClinicalModule,
    EntradasModule,
    DoctorModule,
    ConsultModule,
    PracticeModule,
    EnfermedadModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
