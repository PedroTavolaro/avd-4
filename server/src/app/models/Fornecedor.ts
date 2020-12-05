import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('fornecedores')
class Fornecedor {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nome: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Fornecedor;
