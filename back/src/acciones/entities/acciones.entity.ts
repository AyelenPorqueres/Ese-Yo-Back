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
    type: 'text',

  })
  public lugar: string;

  @Column({
    name: 'descripcion',
    type: 'text',

  })
  public descripcion: string;

  @Column({
    name: 'fecha',
    type: 'text',

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

  constructor(lugar: string, descripcion: string, fecha: string, status: number, cuerpo: string, multimedias:Multimedia[]) {
    this.lugar = lugar;
    this.descripcion = descripcion;
    this.fecha = fecha;
    this.status = status;
    this.cuerpo = cuerpo;
    this.multimedias=multimedias;
  }

  public getId(): number {
    return this.id;
  }

  public setId(id: number): void {
    this.id = id;
  }

  public getLugar(): string {
    return this.lugar;
  }

  public setLugar(lugar: string): void {
    this.lugar = lugar;
  }

  public getDescripcion(): string {
    return this.descripcion;
  }

  public setDescripcion(descripcion: string): void {
    this.descripcion = descripcion;
  }

  public getFecha(): string {
    return this.fecha;
  }

  public setFecha(fecha: string): void {
    this.fecha = fecha;
  }

  public getStatus(): number {
    return this.status;
  }

  public setStatus(status: number): void {
    this.status = status;
  }

  public getCuerpo(): string {
    return this.cuerpo;
  }

  public setCuerpo(cuerpo: string): void {
    this.cuerpo = cuerpo;
  }

  public getMultimedias(): Multimedia[] {
    return this.multimedias;
  }

  public setMultimedias(multimedias: Multimedia[]): void {
    this.multimedias = multimedias;
  }
}
