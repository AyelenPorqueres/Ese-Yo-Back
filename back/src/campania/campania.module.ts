import { Module } from '@nestjs/common';
import { CampaniaService } from './campania.service';
import { CampaniaController } from './campania.controller';
import { Campania } from './entities/campania.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Campania])],
  controllers: [CampaniaController],
  providers: [CampaniaService],
})
export class CampaniaModule {}
