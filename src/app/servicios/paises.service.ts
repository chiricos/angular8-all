import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  constructor(private http: HttpClient) {

  }

  getPaises() {
    let paises = this.http.get('https://restcountries.eu/rest/v2/lang/es').toPromise();
    return paises;
  }
}
