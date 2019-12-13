import { Component, OnInit } from "@angular/core";
import {
  PlanCuentasService,
  UsuarioService,
  ModalControlService
} from "src/app/services/service.index";
import { PlanCuentas } from "src/app/models/ats/planCuentas.model";
import { ModalUpdateService } from 'src/app/components/modal-update-plan/modal-update.service';
import { ActivatedRoute } from "@angular/router";
import Swal from 'sweetalert2';


@Component({
  selector: "app-plan-cuentas",
  templateUrl: "./plan-cuentas.component.html",
  styleUrls: ['./plan-cuentas.component.css'],
})

export class PlanCuentasComponent implements OnInit {

  planCuentas: PlanCuentas[] = [];
  planCuenta: PlanCuentas;
  cargando: boolean = true;
  token: string;
  cuentas: any;

  prev_page: number;
  next_page: number;
  number_pages: any;
  nm: number;
  ap: number;
  total_page: number;
  cachedData:any;
  cachedUrl: any;

  constructor(  public _usuario: UsuarioService,
                public _planCuentas: PlanCuentasService,
                public _modalControl :ModalControlService,
                public _modalUpload: ModalUpdateService,
                public activatedRoute: ActivatedRoute,
  ) {
    this.token = this._usuario.getToken();
    this.planCuenta = new PlanCuentas(0,'','','');
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
      this.actualPageCuentas();
      //this.cuentas = this.cargarPlanCuentas(page);
     // console.log('x',this.cuentas);
     
    });
   
  }

  
/*==========================================================
PAGINA ACTUAL
===========================================================*/
  actualPageCuentas() {
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

/*==========================================================
LISTA PLAN DE CUENTAS
===========================================================*/
  cargarPlanCuentas(page) {
    this.cargando = true;
    this._planCuentas.getPlanCuentas(this.token, page).subscribe(
      resp => {
        this.planCuentas = resp.data;
        
        //this.cuentas = resp.data;
        //console.log('a', this.cuentas);
        
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
      },
      error => {
        console.log(error);
      }
    );
  }

/*==========================================================
PAGINADOR
===========================================================*/
 
/*==========================================================
ELIMINA UNA CUENTA
===========================================================*/
  deleteCuenta( id ){
    Swal.fire({
      title: 'Estas seguro?',
      text: 'Se eliminara: ',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar',
    })
    .then( (borrar) => {
      if (borrar.value) {
        this._planCuentas.delete( this.token, id )
                .subscribe( resp => {this.actualPageCuentas() 
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
