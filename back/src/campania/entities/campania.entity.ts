import { Multimedia } from "src/multimedia/entities/multimedia.entity";
import { Column, PrimaryGeneratedColumn, Entity, ManyToOne, OneToMany } from "typeorm";

@Entity('campanias')
export class Campania {
  @PrimaryGeneratedColumn({
    type: 'int',
  })
  public id: number;

  @Column({
    name: 'titulo',
    type: 'varchar',

  })
  public titulo: string;

  @Column({
    name: 'subTitulo',
    type: 'varchar',

  })
  public subTitulo: string;

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
    type: 'varchar',

  })
  public cuerpo: string;

  @OneToMany(() => Multimedia, (multimedia) => multimedia.campania)
  public multimedias: Multimedia[];

  constructor(titulo: string, subTitulo: string, fecha: string, status: number, cuerpo: string) {
    this.titulo = titulo;
    this.subTitulo = subTitulo;
    this.fecha = fecha;
    this.status = status;
    this.cuerpo = cuerpo;
  }

}
