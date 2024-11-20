import { IsNumber, IsString } from "class-validator"

export class IEquipo {
  @IsNumber()
  id: number;

  @IsString()
  nombre: string;

  @IsString()
  linkFoto: string;

  @IsString()
  descripcionTrabajo: string;
}
