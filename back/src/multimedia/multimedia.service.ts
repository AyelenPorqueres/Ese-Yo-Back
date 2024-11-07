import { Injectable } from '@nestjs/common';
import { IMultimedia } from './model/IMultimedia';

@Injectable()
export class MultimediaService {
  create(IMultimedia: IMultimedia) {
    return 'This action adds a new multimedia';
  }

  findAll() {
    return `This action returns all multimedia`;
  }

  findOne(id: number) {
    return `This action returns a #${id} multimedia`;
  }

  update(id: number, IMultimedia: IMultimedia) {
    return `This action updates a #${id} multimedia`;
  }

  remove(id: number) {
    return `This action removes a #${id} multimedia`;
  }
}
