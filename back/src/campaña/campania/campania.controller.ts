import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CampaniaService } from './campania.service';
import { ICampania } from './model/iCampania';


@Controller('campania')
export class CampaniaController {
  constructor(private readonly campaniaService: CampaniaService) {}

}
