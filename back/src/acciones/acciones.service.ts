import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Acciones } from './entities/acciones.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { IAcciones } from './model/iAcciones';


@Injectable()
export class AccionesService {
  constructor(@InjectRepository(Acciones) private readonly acionesRepository:Repository<Acciones>){}

  async getAcciones():Promise<Acciones[]>{
    try {
      const acciones:Acciones[] = await this.acionesRepository.find()
      return acciones
      
    } catch (error) {
      console.error(error)
    }
  }

  async postAccion(accion:Acciones):Promise<Acciones>{
    try {
      const newAccion = await this.acionesRepository.save(accion) 
      return newAccion
    } catch (error) {
      console.error(error)
    }
  }

  
async eliminarAccion(newId:number):Promise<any>{
    try {
      const acciones:Acciones = await this.acionesRepository.findOne(
        {where:{id : newId}}
      )
      if(acciones){
        await this.acionesRepository.delete({id : newId}) 
        console.log(`La Accion Fue Eliminad Con Exito`)
      }else{
        console.log(`no se encuentra la accion con el id:${newId}`) 
      }
    } catch (error) {
      console.error('no se encuentra la accion',error)
    }
  }

  async editarAccion(idAccion:number,accion:IAcciones):Promise<Acciones>{
    try {
      const editAcciones:Acciones = await this.acionesRepository.findOne(
        {where:{id : idAccion}}
      )
      if(editAcciones){
        editAcciones.setLugar(accion.lugar)
        editAcciones.setDescripcion(accion.descripcion)
        editAcciones.setFecha(accion.fecha)
        editAcciones.setStatus(accion.status)
        editAcciones.setCuerpo(accion.cuerpo)
        editAcciones.setMultimedias(accion.multimedias)
        await this.acionesRepository.save(editAcciones) 
        return editAcciones
      }else{
        console.log(`no se encuentra la accion con el id:${accion.id}`) 
      }
    } catch (error) {
      console.error('no se encuentra la accion',error)
    }
  }
}
