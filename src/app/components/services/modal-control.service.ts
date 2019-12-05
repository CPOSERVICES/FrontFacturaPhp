import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalControlService {

  public oculto: string = 'oculto';
  public notificacion = new EventEmitter<any>();

  constructor() { }

  ocultarModal(){
    this.oculto = 'oculto';
  }
  
  mostarModal(){
    this.oculto = '';
  }
  
}
