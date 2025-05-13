import {Entity,PrimaryGeneratedColumn,Column,ManyToOne,OneToMany,OneToOne,JoinColumn,} from 'typeorm';
import { Usuario } from './Usuario';
import { MetodoPago } from './MetodoPago';
import { Factura } from './Factura';
import { Transaccion } from './Transaccion';

@Entity()
export class Pago {
  @PrimaryGeneratedColumn('uuid')
  Id_Pago!: string;

  @Column()
  Monto!: number;

  @Column()
  Fecha!: Date;

  @Column()
  Estado!: string;

  @ManyToOne(() => Usuario, usuario => usuario.pagos)
  @JoinColumn()
  usuario!: Usuario;

  @ManyToOne(() => MetodoPago, metodo => metodo.pagos)
  @JoinColumn()
  metodoPago!: MetodoPago;

  @OneToOne(() => Factura, factura => factura.pago)
  factura!: Factura;

  @OneToMany(() => Transaccion, transaccion => transaccion.pago)
  transacciones!: Transaccion[];
}
