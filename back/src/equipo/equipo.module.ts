import { Module } from '@nestjs/common';
import { EquipoService } from './equipo.service';
import { EquipoController } from './equipo.controller';
import { Equipo } from './entities/equipo.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([Equipo])],
  controllers: [EquipoController],
  providers: [EquipoService],
})
export class EquipoModule {}
