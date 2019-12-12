import { Component, OnInit } from "@angular/core";
import {
  PlanCuentasService,
  UsuarioService,
  ModalControlService
} from "src/app/services/service.index";
import { PlanCuentas } from "src/app/models/ats/planCuentas.model";
import { Router, ActivatedRoute } from "@angular/router";
import Swal from 'sweetalert2';
import { ModalUpdateService } from 'src/app/components/modal-update-plan/modal-update.service';

@Component({
  selector: "app-plan-cuentas",
  templateUrl: "./plan-cuentas.component.html",
  styles: [],
  providers: [UsuarioService, PlanCuentasService]
})
export class PlanCuentasComponent implements OnInit {

  planCuentas: PlanCuentas[] = [];
  planCuenta: PlanCuentas;
  status: string;

  cargando: boolean = true;
  subirExcel: boolean = true;
  token: string;
  identity: string;
  prev_page: number;
  next_page: number;
  number_pages: any;
  nm: number;
  ap: number;

  constructor(  public _usuario: UsuarioService,
                public _planCuentas: PlanCuentasService,
                public _modalControl :ModalControlService,
                public _modalUpload: ModalUpdateService,
                public activatedRoute: ActivatedRoute,
  ) {
    this.identity = this._usuario.getIdentity();
    this.token = this._usuario.getToken();
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      var page = +params["page"];
      if (!page) {
        page = 1;
        this.prev_page = 1;
        this.next_page = 2;
      }
      this.cargarPlanCuentas(page);
      this.actualPageVideos();
    });
  }

  actualPageVideos() {
    this.activatedRoute.params.subscribe(params => {
      var page = +params["page"];
      if (!page) {
        page = 1;
        this.prev_page = 1;
        this.next_page = 2;
      }
      this.cargarPlanCuentas(page);
      this.ap = page;
    });
  }

  cargarPlanCuentas(page) {
    this.cargando = true;
    this._planCuentas.getPlanCuentas(this.token, page).subscribe(
      resp => {
        this.planCuentas = resp.data;
        //console.log('plan', this.planCuentas);
        var number_pages = [];
        this.nm = resp.total_page;
        for (var i = 1; i <= resp.total_page; i++) {
          number_pages.push(i);
        }
        this.number_pages = number_pages;
        if (page >= 2) {
          this.prev_page = page - 1;
        } else {
          this.prev_page = 1;
        }

        if (page < resp.total_page) {
          this.next_page = page + 1;
        } else {
          this.next_page = resp.total_page;
        }
        this.cargando = false;
        this.subirExcel = true;
      },
      error => {
        console.log(error);
      }
    );
  }

  deleteCuenta( id ){
    Swal.fire({
      title: 'Estas seguro?',
      text: 'Se eliminara: ',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar',

    }).then((borrar) => {
      if (borrar.value) {
        this._planCuentas.delete( this.token, id )
                .subscribe( resp => {this.actualPageVideos() 
                      Swal.fire({
                        showConfirmButton: false,
                        timer: 1500,
                        title: resp.message,
                        icon: resp.status,
                      });
                });
      }
    });
  }




}
