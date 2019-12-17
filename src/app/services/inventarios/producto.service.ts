import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { URL_SERVICES } from 'src/app/config/config';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(
    private http: HttpClient
  ) { }

/*==========================================================
CARGA O LISTA TODOS PRODUCTOS
===========================================================*/
getProductos( token ): Observable<any> {
  /*if (!page) {
      page = 1;
  }*/

const headers = new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .set('Authorization', token);
        let url = URL_SERVICES + '/product/list';
    return this.http.get( url, {headers} );
}
/*==========================================================
CARGA O LISTA PRODUCTO POR ID
===========================================================*/  
getProducto(token, id): Observable<any> {
const headers = new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .set('Authorization', token);
        let url = URL_SERVICES + '/product/detail/' + id;
return this.http.get( url,  {headers});
}

/*==========================================================
CREA PRODUCTO
===========================================================*/
create( token, producto ): Observable<any> {
  console.log('serv', producto)
  const json = JSON.stringify(producto);
  const params = 'json=' + json;
  const headers = new HttpHeaders()
          .set('Content-Type', 'application/x-www-form-urlencoded')
          .set('Authorization', token);
            let url = URL_SERVICES + '/product/new';
            return this.http.post( url, params, {headers});          
}

/*==========================================================
ACTUALIZA PRODUCTO POR ID
===========================================================*/
update(token, producto): Observable<any> {
  const json = JSON.stringify(producto);
  const params = 'json=' + json;
  const headers = new HttpHeaders()
          .set('Content-Type', 'application/x-www-form-urlencoded')
          .set('Authorization', token);
          let url = URL_SERVICES + '/product/edit/' + producto.id;
          return this.http.put( url, params,  {headers});
}

/*==========================================================
ELIMINA PRODUCTO POR ID
===========================================================*/
delete( token, id ): Observable<any> {
  const headers = new HttpHeaders()
          .set('Content-Type', 'application/x-www-form-urlencoded')
          .set('Authorization', token);
          let url = URL_SERVICES + '/product/delete/' + id;
  return this.http.delete( url,  {headers} )
}

}
