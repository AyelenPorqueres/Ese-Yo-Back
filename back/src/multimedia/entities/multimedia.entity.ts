import { Acciones } from "src/acciones/entities/acciones.entity";
import { Column, PrimaryGeneratedColumn, Entity, ManyToOne, JoinColumn } from "typeorm";

@Entity('multimedias')
export class Multimedia {
  @PrimaryGeneratedColumn({
    name: 'id',
    type: 'bigint',
  })
  public id: number;

  @Column({
    name: 'linkMultimedia',
    type: 'varchar',
    precision: 500,
  })
  public linkMultimedia: string;

  @ManyToOne(() => Acciones, (acciones) => acciones.multimedias)
  @JoinColumn({
    name: 'idAcciones',
    foreignKeyConstraintName: 'FK_accionesMultimedia',
  })
  public acciones: Acciones;


  constructor(id: number, linkMultimedia: string) {
    this.id = id;
    this.linkMultimedia = linkMultimedia;
  }

  public getId(): number {
    return this.id;
  }

  public getLinkMultimedia(): string {
    return this.linkMultimedia;
  }
  public setLinkMultimedia(linkMultimedia: string) {
    this.linkMultimedia = linkMultimedia;
  }
}