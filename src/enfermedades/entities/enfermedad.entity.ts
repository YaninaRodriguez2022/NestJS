import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Enfermedad {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ default: false })
  isDeleted: boolean;
}
