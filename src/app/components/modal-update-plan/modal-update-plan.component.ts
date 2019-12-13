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

  constructor(
    public _modalUpdate: ModalUpdateService
  ) {}

  ngOnInit() {}

}
