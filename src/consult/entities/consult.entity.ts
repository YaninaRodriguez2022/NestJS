import { Entrada } from 'src/entradas/entities/entrada.entity';
import { Entity, Column, ChildEntity } from 'typeorm';

Entity();
@ChildEntity()
export class Consult extends Entrada {
  @Column()
  motivo_consulta: string;
  @Column()
  enfermedades: string; //otra tabla mas adelante
  @Column()
  diagnostico: boolean;
  @Column({ default: false })
  isDeleted: boolean;
}
