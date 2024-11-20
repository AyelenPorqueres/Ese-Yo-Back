import { Injectable } from '@nestjs/common';
import { IEquipo } from './model/iEquipo';
import { Equipo } from './entities/equipo.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class EquipoService {

  constructor(
    @InjectRepository(Equipo)
    private readonly equipoRepository: Repository<Equipo>,
  ){}

  async findAll():Promise<Equipo[]> {
    return await this.equipoRepository.find();
  }

}
