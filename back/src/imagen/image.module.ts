// src/image/image.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ImageService } from './image.service';
import { ImageController } from './image.controller';

@Module({
  imports: [],
  providers: [ImageService],
  controllers: [ImageController],
})
export class ImageModule {}
