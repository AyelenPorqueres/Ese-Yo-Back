import { Multimedia } from "src/multimedia/entities/multimedia.entity";
import { Column, PrimaryGeneratedColumn, Entity, ManyToOne, OneToMany } from "typeorm";

@Entity('acciones')
export class Acciones {
  @PrimaryGeneratedColumn({
    type: 'int',
  })
  public id: number;

  @Column({
    name: 'lugar',
    type: 'varchar',

  })
  public lugar: string;

  @Column({
    name: 'descripcion',
    type: 'varchar',

  })
  public descripcion: string;

  @Column({
    name: 'fecha',
    type: 'varchar',

  })
  public fecha: string;

  @Column({
    name: 'status',
    type: 'tinyint',

  })
  public status: number;

  @Column({
    name: 'cuerpo',
    type: 'text',

  })
  public cuerpo: string;

  @OneToMany(() => Multimedia, (multimedia) => multimedia.acciones)
  public multimedias: Multimedia[];

  constructor(lugar: string, descripcion: string, fecha: string, status: number, cuerpo: string) {
    this.lugar = lugar;
    this.descripcion = descripcion;
    this.fecha = fecha;
    this.status = status;
    this.cuerpo = cuerpo;
  }

}
