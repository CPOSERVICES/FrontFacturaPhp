import { Injectable } from "@angular/core";
import {
  PlanCuentasService,
  UsuarioService
} from "src/app/services/service.index";
import { PlanCuentas } from "src/app/models/ats/planCuentas.model";
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Injectable({
  providedIn: "root"
})

export class ModalUpdateService {

  planCuenta: PlanCuentas;
  token: string;
  status: string;
  oculto: string = "oculto";

  pgcid: number;
  pgccuenta;
  pgctipo;
  pgcnombre;
  page: any;

  constructor(
    public _planCuentas: PlanCuentasService,
    public _usuario: UsuarioService,
    public router: Router
  ) {
    this.token = this._usuario.getToken();
  }

  ocultarModalUpdate() {
    this.oculto = "oculto";
    this.pgcid = null;
    this.pgccuenta = null; 
    this.pgctipo = null;
    this.pgcnombre = null;
  }

  mostarModalUpdate(id: number) {
    this.oculto = "";
    //this.pgcid = id;
    this.getCuenta(id);
  }

  getCuenta(id) {
    this._planCuentas.getCuenta(this.token, id).subscribe(
      response => {
        if (response.status == "success") {
          this.planCuenta = response.data;
          this.pgcid = this.planCuenta.pgcid;
          this.pgccuenta = this.planCuenta.pgccuenta;
          this.pgctipo = this.planCuenta.pgctipo;
          this.pgcnombre = this.planCuenta.pgcnombre;
        } else {
          console.log(response.message);
        }
      },
      error => {
        this.status = "error";
        Swal.fire({
          icon: 'warning',
          title: error,
          showConfirmButton: false,
          timer: 1500
        });
      }
    );
  }

  updateCuenta(forma) {
    switch ( forma.value.pgctipo ) {
      case 'A' :
          Swal.fire({
            icon: 'warning',
            title: 'Error al Actualzar',
            text: 'No se puede Actualizar Cuenta de tipo A',
            showConfirmButton: false,
            timer: 1500
          });
          this.ocultarModalUpdate();
      break;
      case 'M': 
      this._planCuentas.update( this.token, forma.value ).subscribe(
        resp => {
          if ( resp.status == "success" ) {
            this.ocultarModalUpdate();
            this.router.navigate(['/planCuentas'])
            Swal.fire({
              icon: resp.status,
              title: resp.message,
              showConfirmButton: false,
              timer: 1500
            });
          } else {
            this.status = "error";
            Swal.fire({
              icon: resp.status,
              title: resp.message,
              showConfirmButton: false,
              timer: 1500
            });
          }
        },
        error => {
          this.status = "error";
          Swal.fire({
            icon: 'warning',
            title: error,
            showConfirmButton: false,
            timer: 1500
          });
        }
      );
      break;
      default: return;
    }
  }
}
