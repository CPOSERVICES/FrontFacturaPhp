import { Injectable, EventEmitter } from '@angular/core';
import { PlanCuentasService, UsuarioService } from 'src/app/services/service.index';
import { PlanCuentas } from 'src/app/models/ats/planCuentas.model';

@Injectable({
  providedIn: 'root'
})

export class ModalUpdateService {

  pgcid: number;
  oculto: string = 'oculto';
  status: string;
  planCuenta: PlanCuentas;
  pgccuenta;
  pgctipo;
  pgcnombre;
  token: string;
  page: any


  constructor(
    public _planCuentas: PlanCuentasService,
    public _usuario: UsuarioService,
  ) {
    this.token = this._usuario.getToken();
   }

  ocultarModalUpdate(){
    this.oculto = 'oculto';
    this.pgcid = null;
  }
  
  mostarModalUpdate( id: number){
    this.oculto = '';
    this.pgcid = id;
    this.getCuenta(id);
  }



  getCuenta(id){
      this._planCuentas.getCuenta( this.token, id).subscribe(
        response => {
          console.log('resp', response)
          if (response.status == 'success') {
            this.planCuenta = response.data;
            this.pgcid=this.planCuenta.pgcid;
            this.pgccuenta=this.planCuenta.pgccuenta;
            this.pgctipo=this.planCuenta.pgctipo;
            this.pgcnombre=this.planCuenta.pgcnombre;            
          } else {
            console.log(response.message);
          }
         
        },
        error => {
          this.status = 'error';
          console.log(error);
        }
      );
 }

 updateCuenta(forma){
   console.log('entro up', forma);
  this._planCuentas.update( this.token, forma.value )
          .subscribe( resp => {
           if (resp.status == 'success') {
             //this.pgcnombre;
             console.log('cuenta', this.pgcnombre);
              console.log(resp);
              this.status = 'success';
             this._planCuentas.getPlanCuentas(this.token, this.page);
            } else {
              this.status = 'error';
            }
          },
          error => {
            this.status = 'error';
            console.log(error);
          });
}
}