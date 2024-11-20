import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MultimediaModule } from './multimedia/multimedia.module';
import { AccionesModule } from './acciones/acciones.module';
import { EquipoModule } from './equipo/equipo.module';
import { ConfigModule } from '@nestjs/config';
import { ImageModule } from './imagen/image.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';


@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'uploads'), // Servir la carpeta de uploads
      serveRoot: '/uploads', // URL de acceso, por ejemplo: http://localhost:8080/uploads/filename
    }),
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
    ImageModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
