import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { URL_SERVICES } from 'src/app/config/config';

@Injectable({
  providedIn: 'root'
})
export class IrbpnrService {

  constructor(
    private http: HttpClient
  ) { }

/*==========================================================
CARGA O LISTA IMPUESTOS Irbpnr
===========================================================*/
  getImpuestoirbpnr( token ): Observable<any> {
    const headers = new HttpHeaders()
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .set('Authorization', token);
            let url = URL_SERVICES + '/irbpnr/list';
        return this.http.get( url, {headers} );
  }
  
}
