import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AccionesService } from './acciones.service';
import { IAcciones } from './model/iAcciones';


@Controller('acciones')
export class AccionesController {
  constructor(private readonly accionesService: AccionesService) {}

}
