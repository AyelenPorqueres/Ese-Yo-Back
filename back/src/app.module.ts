import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MultimediaModule } from './multimedia/multimedia.module';
import { CampaniaModule } from './campania/campania.module';
import { EquipoModule } from './equipo/equipo.module';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: "mysql",
      host: process.env.DB_TYPE,
      port: Number(process.env.DB_TYPE),
      username: process.env.DB_TYPE,
      password: process.env.DB_TYPE,
      database: process.env.DB_TYPE,
      synchronize: true,
      entities: ["dist/**/**.entity{.ts,.js}"],
      logging: 'all',
    }),
    MultimediaModule,
    CampaniaModule,
    EquipoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
