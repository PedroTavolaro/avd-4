import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';

import Comprador from './Comprador';
import Motorista from './Motorista';
import Fornecedor from './Fornecedor';

@Entity('entregas')
class Entrega {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  data_entrega: Date;

  @Column()
  comprador_id: string;

  @Column()
  fornecedor_id: string;

  @Column()
  motorista_id: string;

  @Column()
  sucata: string;

  @OneToOne(() => Comprador)
  @JoinColumn({ name: 'comprador_id' })
  comprador: Comprador;

  @OneToOne(() => Fornecedor)
  @JoinColumn({ name: 'fornecedor_id' })
  fornecedor: Fornecedor;

  @OneToOne(() => Motorista)
  @JoinColumn({ name: 'motorista_id' })
  motorista: Motorista;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Entrega;
