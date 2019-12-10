import { Component, OnInit } from "@angular/core";
import {
  PlanCuentasService,
  UsuarioService,
  ModalControlService
} from "src/app/services/service.index";
import { PlanCuentas } from "src/app/models/ats/planCuentas.model";
import { Router, ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: "app-plan-cuentas",
  templateUrl: "./plan-cuentas.component.html",
  styles: [],
  providers: [UsuarioService, PlanCuentasService]
})
export class PlanCuentasComponent implements OnInit {
  planCuentas: PlanCuentas[] = [];

  cargando: boolean = true;
  subirExcel: boolean = true;
  token: string;
  identity: string;
  prev_page: number;
  next_page: number;
  public number_pages;

  public nm;

  public ap;

  constructor(
    public _usuario: UsuarioService,
    public _planCuentas: PlanCuentasService,
    public activatedRoute: ActivatedRoute,
    public _modalControl :ModalControlService 
  ) {
    this.identity = this._usuario.getIdentity();
    this.token = this._usuario.getToken();
  }

  ngOnInit() {
    this.subirArchivo();
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

  subirArchivo(){
    if ( this.cargando === true){
      this.subirExcel = false;
      
    } else {
      this.subirExcel = true;
      this.cargando = false;
      console.log('x')
    }
  }
}
