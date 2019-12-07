import { Component, OnInit } from '@angular/core';
import { ModalControlService } from 'src/app/services/service.index';

@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styles: []
})
export class PagoComponent implements OnInit {

  constructor(  public _modalControl: ModalControlService) { }

  ngOnInit() {
  }

}
