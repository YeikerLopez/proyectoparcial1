import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Pago } from './Pago';

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn('uuid')
  Id_Usuario!: string;

  @Column()
  Nombre!: string;

  @Column({ unique: true })
  Correo_Electronico!: string;

  @Column({ nullable: true })
  Historial_Subasta!: string;

  @OneToMany(() => Pago, (pago) => pago.usuario)
  pagos!: Pago[];
}
