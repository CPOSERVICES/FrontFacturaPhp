import { Component, OnInit } from '@angular/core';
import { PlanCuentasService, ModalUpdateService, UsuarioService } from 'src/app/services/service.index';
import { PlanCuentas } from 'src/app/models/ats/planCuentas.model';
import { ActivatedRoute, Router } from '@angular/router';
 

@Component({
  selector: 'app-modal-update-plan',
  templateUrl: './modal-update-plan.component.html',
  styles: []
})
export class ModalUpdatePlanComponent implements OnInit {

  planCuenta: PlanCuentas
  token: string;
  status: string;
  id: number;

  constructor(
    public _modalUpdate: ModalUpdateService,
    public _planCuentas: PlanCuentasService,
    public _usuario: UsuarioService,
    public router: Router,
    public activatedRoute: ActivatedRoute,
  ) {
    this.token = this._usuario.getToken();

   }

  ngOnInit() {
  
  }

}
