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

  constructor(  public http: HttpClient

  ) { 
    this.getIdentity();
  }

/*==========================================================
CONFIRMA SI ESTA LOGUEADO O NO
===========================================================*/
  estalogueado() {
    // ( this.token > 5 )? true : false
    return true;
  }

  signup(user, gettoken = null): Observable<any> {
  
    if(gettoken != null) {
        user.gettoken = 'true';
    }
    const json = JSON.stringify(user);
    const params = 'json=' + json;
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
  
    return this.http.post( URL_SERVICES + '/login', params, {headers});
  
  }

  getIdentity() {
    const identity = JSON.parse(localStorage.getItem('identity'));
  
    // tslint:disable-next-line: triple-equals
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
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
                                     .set('Authorization', token);

    return this.http.put(URL_SERVICES + '/user/edit', params, {headers});

}

}
