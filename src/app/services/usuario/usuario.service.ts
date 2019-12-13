import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from 'src/app/models/user/user.model';

import { URL_SERVICES } from 'src/app/config/config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  token: string = '';
  user: Usuario;
  identity: string;
  compruebaToken: string;

  constructor(  public http: HttpClient

  ) { 
    this.getIdentity();
   this.compruebaToken = this.getToken();
   //console.log(this.compruebaToken);
  }

/*==========================================================
CONFIRMA SI ESTA LOGUEADO O NO
===========================================================*/
  estalogueado() {
    //return ( this.getToken().length > 5 || this.getToken() !== null)? true : false;
  }

  signup( user, gettoken = null): Observable<any> {
  
    if(gettoken != null) {
        user.gettoken = 'true';
    }
    const json = JSON.stringify(user);
    const params = 'json=' + json;
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    let url = URL_SERVICES + '/login';
    return this.http.post( url, params, {headers});
  }

  getIdentity() {
    const identity = JSON.parse(localStorage.getItem('identity'));

    if (identity && identity != 'undefined' ){
        this.identity = identity;
    } else {
        this.identity = null;
    }
    return this.identity;
  }

   getToken(){
     let token = localStorage.getItem('token');
     if (token && token != 'undefined' ) {
       this.token = token;
     } else {
       this.token = null;
     }
     return this.token;
   }

   update(token, user): Observable<any> {
    const json = JSON.stringify(user);
    const params = 'json=' + json;
    const headers = new HttpHeaders()
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .set('Authorization', token);
            let url = URL_SERVICES + '/user/edit';
    return this.http.put(url, params, {headers});
  }

}
