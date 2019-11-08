import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  

  private products = [
    {
      name: 'Telefono',
      price: 789,
      cant: 400,
      description: 'Un telefono grande'
    },
    {
      name: 'Telefono que mas',
      price: 789,
      cant: 300,
      description: 'Un telefono grande'
    },
    {
      name: 'Telefono Estandar ',
      price: 789,
      cant: 500,
      description: 'Un telefono grande'
    },
  ];

  productosComprados:number;

  constructor() {
    this.productosComprados = 0;
  }

  getProductos() {
    return this.products;
  }

  getProducto(idx) {
    return this.products[idx];
  }

}
