import { Entrada } from 'src/entradas/entities/entrada.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Doctors {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ default: true })
  isActive: boolean;
  @Column()
  matricula: number;
  @Column()
  especialidad: string;
  @Column({ default: false })
  isDeleted: boolean;
  @OneToMany(() => Entrada, (entrada) => entrada.doctor)
  entradas: Entrada[];
}
