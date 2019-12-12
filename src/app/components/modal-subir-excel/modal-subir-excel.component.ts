import { Component, OnInit } from "@angular/core";
import {
  ModalControlService,
  PlanCuentasService,
  UsuarioService
} from "src/app/services/service.index";
import { PlanCuentas } from "src/app/models/ats/planCuentas.model";
import { Router } from "@angular/router";
import Swal from 'sweetalert2';


@Component({
  selector: "app-modal-subir-excel",
  templateUrl: "./modal-subir-excel.component.html",
  styles: []
})

export class ModalSubirExcelComponent implements OnInit {
  planCuentas: PlanCuentas;
  token: string;
  listaCuentas: PlanCuentas[] = [];
  status: string;
  identity: string;

  constructor(
    public _modalControl: ModalControlService,
    public _planCuentas: PlanCuentasService,
    public _usuario: UsuarioService,
    public router: Router
  ) {
    this.token = this._usuario.getToken();
    this.planCuentas = new PlanCuentas (0, '','','');
  }

  ngOnInit() {
    this.listarTipoCuenta();
  }

  listarTipoCuenta() {
    this._planCuentas
      .listaCuentasPrimarias(this.token)
      .subscribe((resp: any) => {
        this.listaCuentas = resp.data;
      });
  }

  crearCuenta(forma) {
    this._planCuentas.create(this.token, this.planCuentas).subscribe(
      response => {
        console.log("resp", response);
        if (response.status == "success") {
          this.status = "success";
          Swal.fire({
            icon: response.status,
            title: response.message,
            showConfirmButton: false,
            timer: 1500
          })
          this._modalControl.ocultarModal();
          forma.reset();
        } else {
          this.status = "error";
          Swal.fire({
            icon: response.status,
            title: response.message,
            showConfirmButton: false,
            timer: 1500
          })
        }
      },
      error => {
        this.status = "error";
        console.log(error);
      }
    );
    //console.log(forma.value);
  }
}
