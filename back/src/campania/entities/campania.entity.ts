import { Multimedia } from "src/multimedia/entities/multimedia.entity";
import { Column, PrimaryGeneratedColumn, Entity, ManyToOne, OneToMany } from "typeorm";

@Entity('campania')
export class Campania {
  @PrimaryGeneratedColumn({
    type: 'int',
  })
  public id: number;

  @Column({
    name: 'titulo',
    type: 'varchar',

  })
  private titulo: string;

  @Column({
    name: 'subTitulo',
    type: 'varchar',

  })
  private subTitulo: string;

  @Column({
    name: 'fecha',
    type: 'varchar',

  })
  private fecha: string;

  @Column({
    name: 'status',
    type: 'tinyint',

  })
  private status: number;

  @Column({
    name: 'cuerpo',
    type: 'varchar',

  })
  private cuerpo: string;

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