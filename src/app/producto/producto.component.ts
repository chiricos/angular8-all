import { Component, OnInit, Input, Output, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  @ViewChild('inputCantidad', {static:true, read: false}) inputComprar:ElementRef;

  @Input() product:any;
  @Input('i') idx:number;

  @Output() cantidadComprados:EventEmitter<number>;

  cantidadComprar:number;

  constructor(private router:Router) {
    this.cantidadComprados = new EventEmitter<number>();
  }
  

  ngOnInit() {
  }

  detalles(){
    this.router.navigate(['/detalle-producto',this.idx]);
  }

  comprarProducto(){
    this.product.cant -= this.cantidadComprar;
    this.cantidadComprados.emit(+this.cantidadComprar);
    //this.cantidadComprar = null;
    this.inputComprar.nativeElement.value = '';
    this.inputComprar.nativeElement.focus()
  }

}
