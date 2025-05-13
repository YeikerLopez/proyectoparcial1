import {Entity,PrimaryGeneratedColumn,Column,ManyToOne,JoinColumn,} from 'typeorm';
import { Pago } from './Pago';
import { Subasta } from './Subasta';

  @Entity()
  export class Transaccion {
    @PrimaryGeneratedColumn('uuid')
    Id_Transaccion!: string;

    @ManyToOne(() => Pago, pago => pago.transacciones)
    @JoinColumn({ name: 'Id_Pago' })
    pago!: Pago;


    @ManyToOne(() => Subasta)
    @JoinColumn({ name: 'Id_Subasta' })
    subasta!: Subasta;

    @Column()
    Estado!: string;

    @Column()
    Fecha!: Date;
  }
