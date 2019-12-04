import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() { }

/*==========================================================
CONFIRMA SI ESTA LOGUEADO O NO
===========================================================*/
estalogueado() {
  // ( this.token.length > 5 )? true : false
  return true;
}
}
