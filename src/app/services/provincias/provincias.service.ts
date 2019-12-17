import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Provincia } from 'src/app/models/provincias/provincias.model';

@Injectable({
  providedIn: 'root'
})
export class ProvinciasService {

  //provincias: Provincia = {}

  constructor(
    private http: HttpClient
  ) { 

    this.http.get('assets/data/data-provincias.json')
            .subscribe( resp => {
              //this.provincias = resp;
              console.log(resp);
            })
  }
}
