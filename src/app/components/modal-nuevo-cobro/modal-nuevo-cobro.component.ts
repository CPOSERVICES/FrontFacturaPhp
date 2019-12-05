import { Component, OnInit } from '@angular/core';
import { ModalControlService } from 'src/app/services/service.index';

@Component({
  selector: 'app-modal-nuevo-cobro',
  templateUrl: './modal-nuevo-cobro.component.html',
  styles: []
})
export class ModalNuevoCobroComponent implements OnInit {

  constructor(  public _modalControl: ModalControlService
    ) { }

  ngOnInit() {
  }

}
