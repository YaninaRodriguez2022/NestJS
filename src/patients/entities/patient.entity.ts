import { HistoryClinical } from 'src/history-clinical/entities/historyClinical.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Patients {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ default: true })
  isActive: boolean;

  @Column({ default: false })
  isDeleted: boolean;
  @OneToMany(
    () => HistoryClinical,
    (historyclinical) => historyclinical.patient,
  )
  entradaIncludes: HistoryClinical[];
}
