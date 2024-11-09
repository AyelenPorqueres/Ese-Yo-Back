import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MultimediaService } from './multimedia.service';
import { IMultimedia } from './model/IMultimedia';

@Controller('multimedia')
export class MultimediaController {
  constructor(private readonly multimediaService: MultimediaService) {}

  @Post()
  create(@Body() IMultimedia: IMultimedia) {
    return this.multimediaService.create(IMultimedia);
  }

  @Get()
  findAll() {
    return this.multimediaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.multimediaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() IMultimedia: IMultimedia) {
    return this.multimediaService.update(+id, IMultimedia);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.multimediaService.remove(+id);
  }
}
