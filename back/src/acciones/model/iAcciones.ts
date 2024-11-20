import { Multimedia } from "src/multimedia/entities/multimedia.entity";
export class IAcciones {
  id?:number;
  lugar?:string;
  descripcion?:string;
  fecha?:string;
  status?:number;
  cuerpo?:string;
  multimedias?:Multimedia[]
}
