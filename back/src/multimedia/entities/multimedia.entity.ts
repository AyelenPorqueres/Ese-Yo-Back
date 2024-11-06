import { Campania } from "src/campania/entities/campania.entity";
import { Column, PrimaryGeneratedColumn, Entity, ManyToOne, JoinColumn } from "typeorm";

@Entity('multimedia')
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
  private linkMultimedia: string;

  @ManyToOne(() => Campania, (campania) => campania.multimedias)
  @JoinColumn({
    name: 'idCampania',
    foreignKeyConstraintName: 'FK_campaniaMultimedia',
  })
  public campania: Campania;


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