import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MultimediaModule } from './multimedia/multimedia.module';
import { AccionesModule } from './acciones/acciones.module';
import { EquipoModule } from './equipo/equipo.module';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: "mysql",
      host: process.env.DB_TYPE,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      synchronize: false,
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
