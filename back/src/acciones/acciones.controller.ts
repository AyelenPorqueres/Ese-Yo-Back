import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { AccionesService } from './acciones.service';
import { IAcciones } from './model/iAcciones';
import { Acciones } from './entities/acciones.entity';


@Controller('acciones')
export class AccionesController {
  constructor(private readonly accionesService: AccionesService) {}
    /**
     * Debuelve todas las acciones guardadas en la base de datos
     * @returns Arreglo de Acciones
     */
    @Get('')
    async getAcciones():Promise<Acciones[]>{
      return this.accionesService.getAcciones()
    }

    /**
     * Guarda una accion de tipo IAcciones como Acciones en la base de datos
     * @param accion 
     * @returns Accion Guardada
     */
    @Post('')
    async postAccion(@Body() body:IAcciones):Promise<Acciones>{
      const newAccion = new Acciones(
        body.lugar,
        body.descripcion,
        body.fecha,
        body.status,
        body.cuerpo,
        body.multimedias
      )
      return this.accionesService.postAccion(newAccion)
    }

    @Delete('')
    async deleteAccion(@Body() body:{
      id:number}):Promise<any>{
      await this.accionesService.eliminarAccion(body.id)
    }

    @Put('/:id')
    async editarAccion(@Param() params: any, @Body() body: IAcciones):Promise<Acciones>{
      const accion = body
      const {id } = params
      return this.accionesService.editarAccion(id,accion)
    }
}
