import { Injectable } from '@angular/core';
import { UsuarioService } from '../usuario/usuario.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { URL_SERVICES } from 'src/app/config/config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(
    //private _usuario: UsuarioService,
    private http: HttpClient
  ) { }

/*==========================================================
BUSCAR CUENTA POR ID
===========================================================*/
buscaCliente( token, id ){
  const headers = new HttpHeaders()
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .set('Authorization', token);
            let url = URL_SERVICES + '/client/detail/' + id;
        return this.http.get( url, {headers} );
  }

/*==========================================================
CARGA O LISTA TODOS CLIENTES
===========================================================*/
  getClientes( token ): Observable<any> {
    /*if (!page) {
        page = 1;
    }*/

  const headers = new HttpHeaders()
          .set('Content-Type', 'application/x-www-form-urlencoded')
          .set('Authorization', token);
          let url = URL_SERVICES + '/client/list';
      return this.http.get( url, {headers} );
  }
/*==========================================================
CARGA O LISTA CLIENTE POR ID
===========================================================*/  
  getCliente(token, id): Observable<any> {
  const headers = new HttpHeaders()
          .set('Content-Type', 'application/x-www-form-urlencoded')
          .set('Authorization', token);
          let url = URL_SERVICES + '/client/detail/' + id;
  return this.http.get( url,  {headers});
}

/*==========================================================
CREA CLIENTE
===========================================================*/
  create( token, cliente ): Observable<any> {
    console.log('serv', cliente)
    const json = JSON.stringify(cliente);
    const params = 'json=' + json;
    const headers = new HttpHeaders()
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .set('Authorization', token);
            let url = URL_SERVICES + '/client/new';
      return this.http.post( url, params, {headers});
  }

/*==========================================================
ACTUALIZA CLIENTE POR ID
===========================================================*/
  update(token, cuenta): Observable<any> {
    const json = JSON.stringify(cuenta);
    const params = 'json=' + json;
    const headers = new HttpHeaders()
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .set('Authorization', token);
            let url = URL_SERVICES + '/client/edit/' + cuenta.pgcid;
    return this.http.put( url, params,  {headers});
  }

/*==========================================================
ELIMINA CLIENTE POR ID
===========================================================*/
  delete( token, id ): Observable<any> {
    const headers = new HttpHeaders()
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .set('Authorization', token);
            let url = URL_SERVICES + '/client/delete/' + id;
    return this.http.delete( url,  {headers} )
  }

}
