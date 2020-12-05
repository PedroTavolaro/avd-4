import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('motoristas')
class Motorista {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nome: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Motorista;
