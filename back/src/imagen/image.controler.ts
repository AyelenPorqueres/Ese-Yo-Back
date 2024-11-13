// src/image/image.controller.ts

import { Controller, Post, UploadedFile, UseInterceptors, BadRequestException } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ImageService } from './image.service';
import { Image } from './entities/imagen.entity';

@Controller('images')
export class ImageController {
  constructor(private readonly imageService: ImageService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('image', {
    fileFilter: (req, file, callback) => {
      // Permitir solo archivos con tipos MIME de imágenes comunes
      const allowedMimeTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
      if (allowedMimeTypes.includes(file.mimetype)) {
        callback(null, true);
      } else {
        callback(new BadRequestException('Tipo de archivo no permitido. Solo se aceptan imágenes.'), false);
      }
    },
  }))
  async uploadImage(@UploadedFile() file: Express.Multer.File): Promise<Image> {
    if (!file) {
      throw new BadRequestException('No se ha enviado ningún archivo.');
    }

    // Llama al servicio para guardar la imagen
    return this.imageService.saveImage(file);
  }
}
