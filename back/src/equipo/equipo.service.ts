import { Injectable } from '@nestjs/common';
import { IEquipo } from './model/iEquipo';

@Injectable()
export class EquipoService {
  create(createEquipoDto: IEquipo) {
    return 'This action adds a new equipo';
  }

  findAll() {
    return `This action returns all equipo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} equipo`;
  }

  update(id: number, updateEquipoDto: IEquipo) {
    return `This action updates a #${id} equipo`;
  }

  remove(id: number) {
    return `This action removes a #${id} equipo`;
  }
}
