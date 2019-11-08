import { Component, OnInit, ViewChildren, AfterViewChecked } from '@angular/core';
import { Router } from '@angular/router';
import { ProductoComponent } from '../producto/producto.component';
import { QueryList } from '@angular/core';
import { ProductoService } from '../servicios/producto.service';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit , AfterViewChecked{

  @ViewChildren(ProductoComponent) lista: QueryList<ProductoComponent>;


  constructor(private router:Router, public productoServicio:ProductoService) {
    
  }

  ngOnInit() {
  }

  getProductos() {
    return this.productoServicio.getProductos();
  }

  ngAfterViewChecked() {
    console.log(this.lista);
  }

  detalles(idx){
    this.router.navigate(['/producto',idx]);
  }

  aumentarCantidadComprados(cantidad) {
    this.productoServicio.productosComprados += cantidad;
  }

  verProductosComponent() {
    console.log(this.lista);
  }
}
