import {Entity,PrimaryGeneratedColumn,Column,OneToOne,JoinColumn,} from 'typeorm';
import { Pago } from './Pago';

@Entity()
export class Factura {
  @PrimaryGeneratedColumn('uuid')
  Id_Factura!: string;

  @OneToOne(() => Pago, pago => pago.factura, { nullable: false })
  @JoinColumn({ name: 'Id_Pago' })
  pago!: Pago;


  @Column({ nullable: false })
  Fecha_Emision!: Date;

  @Column({ nullable: false })
  Descripcion!: string;

  @Column('decimal', { nullable: false })
  Monto_Total!: number;
}
