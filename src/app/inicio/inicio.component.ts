import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../servicios/producto.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private productoServicio:ProductoService) {
    console.log('cantidad productos comprados: ', productoServicio.productosComprados);
  }

  ngOnInit() {
  }

}
