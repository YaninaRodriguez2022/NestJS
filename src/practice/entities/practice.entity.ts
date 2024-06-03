import { Entrada } from 'src/entradas/entities/entrada.entity';
import { Entity, Column, ChildEntity } from 'typeorm';

Entity();
@ChildEntity()
export class Practice extends Entrada {
  @Column()
  duracion: number;
  @Column()
  complicaciones: string;
  @Column()
  resultado_final: boolean;
  @Column({ default: false })
  isDeleted: boolean;
}
