import { Injectable } from '@angular/core';
import { Producto } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  products: Producto[] = [];

  conole(){
    console.log(this.products,"consol de conole");
  }

  constructor() { } 

  setItem(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getItem(key: string): any {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  }

    // Método para eliminar un valor del localStorage
    removeItem(key: string): void {
      localStorage.removeItem(key);
    }
  
     // Método para limpiar todos los valores del localStorage
  clear(): void {
    localStorage.clear();
  }

}
