// src/image/image.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Image } from './entities/imagen.entity';
import * as fs from 'fs';
import * as path from 'path';


@Injectable()
export class ImageService {
  constructor(
    @InjectRepository(Image)
    private readonly imageRepository: Repository<Image>,
  ) {}

  // Método para guardar la imagen y la URL en la base de datos
  async saveImage(file: Express.Multer.File): Promise<Image> {
    const uploadDir = path.join(__dirname, '../../uploads');

    // Crear el directorio 'uploads' si no existe
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir);
    }

    // Generar un nombre de archivo único
    const uniqueName = `${Date.now()}-${Math.round(Math.random() * 1E9)}${path.extname(file.originalname)}`;
    const filePath = path.join(uploadDir, uniqueName);

    // Guardar el archivo en el sistema de archivos
    fs.writeFileSync(filePath, file.buffer);

    // Crear la URL relativa para la imagen
    const imageUrl = `/uploads/${uniqueName}`;

    // Crear una instancia de la entidad Image con la URL
    const image = this.imageRepository.create({
      filename: uniqueName,
      url: imageUrl,
    });

    // Guardar la instancia en la base de datos
    return this.imageRepository.save(image);
  }
}
