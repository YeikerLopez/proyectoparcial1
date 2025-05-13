import {Entity,PrimaryGeneratedColumn,Column,ManyToOne,OneToMany,JoinColumn,} from 'typeorm';
import { Usuario } from './Usuario';
import { Transaccion } from './Transaccion';

@Entity()
export class Subasta {
  @PrimaryGeneratedColumn('uuid')
  Id_Subasta!: string;

  @Column()
  Titulo!: string;

  @Column()
  Descripcion!: string;

  @Column()
  Fecha_Inicio!: Date;

  @Column()
  Fecha_Fin!: Date;

  @ManyToOne(() => Usuario)
  @JoinColumn({ name: 'Id_Usuario' })
  usuario!: Usuario;

  @OneToMany(() => Transaccion, transaccion => transaccion.subasta)
  transacciones!: Transaccion[];
}


// Este archivo define la entidad Subasta que representa una subasta en la base de datos.