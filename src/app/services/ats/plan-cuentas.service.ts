import { Injectable } from '@angular/core';
import { PlanCuentas } from 'src/app/models/ats/planCuentas.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { URL_SERVICES } from 'src/app/config/config';
import { UsuarioService } from '../usuario/usuario.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class PlanCuentasService {

  //cuentas : PlanCuentas
  token: string



  constructor(  public _usuario: UsuarioService,
                public http: HttpClient,
                public activatedRoute: ActivatedRoute
            ) {}

/*==========================================================
BUSCAR CUENTA POR NOMBRE
===========================================================*/
  buscaCuentaNombre( token, nombre ){
  const headers = new HttpHeaders()
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .set('Authorization', token);
            let url = URL_SERVICES + '/accountgeneral/listnombre/' + nombre;
        return this.http.get( url, {headers} );
  }

/*==========================================================
LISTA LAS CUENTAS PRIMARIAS
===========================================================*/
  listaCuentasPrimarias( token ){
    const headers = new HttpHeaders()
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .set('Authorization', token);
            let url = URL_SERVICES + '/accountgeneral/listcuentas';
        return this.http.get( url, {headers} );
  }

/*==========================================================
CARGA O LISTA TODO PLAN DE CUENTAS
===========================================================*/
  getPlanCuentas( token, page ): Observable<any> {
    if (!page) {
        page = 1;
    }

  const headers = new HttpHeaders()
          .set('Content-Type', 'application/x-www-form-urlencoded')
          .set('Authorization', token);
          let url = URL_SERVICES + '/accountgeneral/list?page=' + page;
      return this.http.get( url, {headers} );
  }
/*==========================================================
CARGA O LISTA PLAN DE CUENTAS POR ID
===========================================================*/  
  getCuenta(token, id): Observable<any> {
  const headers = new HttpHeaders()
          .set('Content-Type', 'application/x-www-form-urlencoded')
          .set('Authorization', token);
          let url = URL_SERVICES + '/accountgeneral/find/' + id;
          console.log('url', url)
  return this.http.get( url,  {headers});
}

/*==========================================================
CREA CUENTA
===========================================================*/
  create( token, cuenta ): Observable<any> {
    const json = JSON.stringify(cuenta);
    const params = 'json=' + json;
    const headers = new HttpHeaders()
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .set('Authorization', token);
            let url = URL_SERVICES + '/accountgeneral/new';
      return this.http.post( url, params, {headers});
  }

/*==========================================================
ACTUALIZA CUENTA SOLO SECUNADARIA
===========================================================*/
  update(token, cuenta): Observable<any> {
    console.log('cuentaxxxxx', cuenta);
    const json = JSON.stringify(cuenta);
    const params = 'json=' + json;
    const headers = new HttpHeaders()
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .set('Authorization', token);
            let url = URL_SERVICES + '/accountgeneral/edit/' + cuenta.pgcid;
    return this.http.put( url, params,  {headers});
  }

/*==========================================================
ELIMINA CUENTA SOLO SECUNADARIA
===========================================================*/
  delete( token, id ): Observable<any> {
    const headers = new HttpHeaders()
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .set('Authorization', token);
            let url = URL_SERVICES + '/accountgeneral/delete/' + id;
    return this.http.delete( url,  {headers} )
  }




}
