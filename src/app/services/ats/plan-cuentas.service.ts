import { Injectable } from '@angular/core';
import { PlanCuentas } from 'src/app/models/ats/planCuentas.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { URL_SERVICES } from 'src/app/config/config';
import { UsuarioService } from '../usuario/usuario.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlanCuentasService {

  cuentas : PlanCuentas
  token: string



  constructor(  public _usuario: UsuarioService,
                public http: HttpClient,
            ) { }


/*==========================================================
CARGA O LISTA TODO PLAN DE CUENTAS
===========================================================*/
getPlanCuentas(token,page): Observable<any> {
  if (!page) {
      page = 1;

  }

  const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
                                   .set('Authorization', token);
                                  //s console.log('page0000', page);

  return this.http.get(URL_SERVICES + '/accountgeneral/list?page=' + page,  {headers});
  
}
}
