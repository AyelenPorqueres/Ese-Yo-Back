import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EquipoService } from './equipo.service';
import { IEquipo } from './model/iEquipo';

@Controller('equipo')
export class EquipoController {
  constructor(private readonly equipoService: EquipoService) {}

  @Get()
  async findAll():Promise<IEquipo[]> {
    return await this.equipoService.findAll();
  }

}
