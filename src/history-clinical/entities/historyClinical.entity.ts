import { Column, PrimaryGeneratedColumn, Entity, ManyToOne } from 'typeorm';
import { Patients } from 'src/patients/entities/patient.entity';
import { Entrada } from 'src/entradas/entities/entrada.entity';
@Entity({ name: 'historyClinical' })
export class HistoryClinical {
  @PrimaryGeneratedColumn()
  id: number;
  @ManyToOne(() => Patients, (patient) => patient.entradaIncludes)
  patient: Patients;

  @ManyToOne(() => Entrada, (entrada) => entrada.patientIncludes)
  entrada: Entrada[];
  @Column({ nullable: true })
  additionalNotes: string; // Notas adicionales, opcional

  @Column({ default: false })
  isDeleted: boolean;
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}
