import { Injectable } from '@angular/core';
import{BANDAS} from '../bd/bandas.db';

export interface Banda {
  id: number;
  nombre: string;
  fechaCreacion: string;
  imagen: string;
  pais: string;
  informacion:string;
  integrantes:string;
  activos:string;
  discoMasVendido:string;
  cancion1:string;
  cancion2:string;
  cancion3:string;
}

@Injectable({
  providedIn: 'root'
})

export class BandasService {

  constructor() { }

  getAll(): Promise<Banda[]> {
    return new Promise((resolve, reject) => {
      resolve(BANDAS);
    });
  }
  getById(pId: number): Promise<Banda> {
    return new Promise((resolve, reject) => {
      const bandaEncontrada = JSON.parse(localStorage.getItem('bandas')).find(banda => {
        return banda.id === pId;
      });
      resolve(bandaEncontrada);
    })
  }
  deleteById(pId: number): Promise<Banda> {
    return new Promise((resolve, reject) => {
      const bandaEncontrada = JSON.parse(localStorage.getItem('bandas')).find(banda => {
        return banda.id === pId;
      });
      resolve(bandaEncontrada);
    })
  }
}
