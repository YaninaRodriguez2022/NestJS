import { HistoryClinical } from 'src/history-clinical/entities/historyClinical.entity';
import { Patients } from 'src/patients/entities/patient.entity';
import { Doctors } from 'src/doctor/entities/doctor.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  TableInheritance,
  ManyToOne,
} from 'typeorm';

@Entity()
@TableInheritance({ column: { type: 'varchar', name: 'type' } })
export class Entrada {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  additionalNotes: string; // Notas adicionales, opcional

  @ManyToOne(() => Doctors, (doctor) => doctor.entradas)
  doctor: Doctors;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
  @Column({ default: false })
  isDeleted: boolean;
  @OneToMany(
    () => HistoryClinical,
    (historyclinical) => historyclinical.entrada,
  )
  patientIncludes: Patients[];
}
