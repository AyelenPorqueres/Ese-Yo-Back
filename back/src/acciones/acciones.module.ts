import { Module } from '@nestjs/common';
import { AccionesService } from './acciones.service';
import { AccionesController } from './acciones.controller';
import { Acciones } from './entities/acciones.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Acciones])],
  controllers: [AccionesController],
  providers: [AccionesService],
})
export class AccionesModule {}
