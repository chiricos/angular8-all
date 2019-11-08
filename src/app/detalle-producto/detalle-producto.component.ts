import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductoService } from '../servicios/producto.service';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent implements OnInit {

  product:any;
  id_producto:number;

  constructor(private router:Router, private _activatedRoute:ActivatedRoute, private ProductoServicio:ProductoService) {
     
      this._activatedRoute.params.subscribe((params) => {
        this.id_producto = params['id-producto'];
    });
  }

  ngOnInit() {
    this.product = this.ProductoServicio.getProducto(this.id_producto);
  }




  atras(){
    this.router.navigate(['/lista-productos']);
  }

}
