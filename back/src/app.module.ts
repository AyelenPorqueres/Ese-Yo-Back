import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MultimediaModule } from './multimedia/multimedia.module';
import { AccionesModule } from './acciones/acciones.module';
import { EquipoModule } from './equipo/equipo.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'eseyodb',
      synchronize: true,
      entities: ["dist/**/**.entity{.ts,.js}"],
      logging: 'all',
    }),
    MultimediaModule,
    AccionesModule,
    EquipoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
