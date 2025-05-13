import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Pago } from './Pago';

@Entity()
export class MetodoPago {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ nullable: false, unique: true })
  Codigo!: string;

  @Column({ nullable: false })
  Metodo_Pago!: string;

  @Column({ nullable: false })
  Estado!: string;

  @Column({ nullable: false })
  Detalles!: string;

  @Column({ nullable: true })
  Descripcion!: string;

  @OneToMany(() => Pago, pago => pago.metodoPago)
  pagos!: Pago[]; 
}
// Este archivo define la entidad MetodoPago que representa un método de pago en la base de datos.

