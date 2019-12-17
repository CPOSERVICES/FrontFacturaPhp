import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { URL_SERVICES } from 'src/app/config/config';

@Injectable({
  providedIn: 'root'
})
export class IceService {

  constructor(
    private http: HttpClient
  ) { }

/*==========================================================
CARGA O LISTA IMPUESTOS ICE
===========================================================*/
getImpuestoIce( token ): Observable<any> {
  const headers = new HttpHeaders()
          .set('Content-Type', 'application/x-www-form-urlencoded')
          .set('Authorization', token);
          let url = URL_SERVICES + '/ice/list';
      return this.http.get( url, {headers} );
  }
}

