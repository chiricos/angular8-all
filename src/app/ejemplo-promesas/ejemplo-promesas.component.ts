import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PaisesService } from '../servicios/paises.service';

@Component({
  selector: 'app-ejemplo-promesas',
  templateUrl: './ejemplo-promesas.component.html',
  styleUrls: ['./ejemplo-promesas.component.css']
})
export class EjemploPromesasComponent implements OnInit {

  constructor(private paises: PaisesService) {
    
    this.contarTres().then((resp) => {
      console.log(resp);
    })
    .catch((error) => {
      console.log(error);
    });

    this.contarTresObservable().subscribe((resp) => {
      console.log(resp);
    });
  }

  ngOnInit() {
    /*this.paises.getPaises().subscribe((resp) => {
      console.log(resp);
    });*/
    this.paises.getPaises().then( (resp)=> {
      console.log(resp)
    });
  }

  contarTres() {
    return  new Promise((resolve, reject) => {
      let contador = 0;
      let intervalor = setInterval(() => {
        contador++;
        console.log(contador);
        if (contador === 3) {
          resolve({resp : 'paso por 3'});
          clearInterval(intervalor);
        }
        if (contador === 2) {
          reject({error: ' ejemplo error'})
          clearInterval(intervalor);
        }
      },1000)
    });
  }

  contarTresObservable() {
    let obs = new Observable((observer) => {
      
      let contador = 0;

      let intervalor = setInterval(()=> {
        contador++;
        console.log(contador);
        if (contador === 3) {
          observer.next({relog: contador});
        }
        if (contador === 6) {
          observer.error({error: contador})
        }
      },1000);

    });
    return obs;
  }

}
