import { Column, PrimaryGeneratedColumn, Entity, ManyToOne, OneToMany } from "typeorm";

@Entity('equipo')
export class Equipo {
    @PrimaryGeneratedColumn({
        type: 'int',
    })
    public id: number;

    @Column({
        name: 'nombre',
        type: 'varchar',

    })
    public nombre: string;

    @Column({
        name: 'linkFoto',
        type: 'varchar',

    })
    public linkFoto: string;

    @Column({
        name: 'descripcionTrabajo',
        type: 'text',

    })
    public descripcionTrabajo: string;

    constructor(nombre: string, linkFoto: string, descripcionTrabajo: string) {
        this.nombre = nombre;
        this.linkFoto = linkFoto;
        this.descripcionTrabajo = descripcionTrabajo;
    }
}
