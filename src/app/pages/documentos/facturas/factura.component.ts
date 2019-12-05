import { Component, OnInit } from '@angular/core';
import { ModalControlService } from 'src/app/services/service.index';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styles: []
})
export class FacturaComponent implements OnInit {

  constructor( public _modalControl: ModalControlService

  ) { }

  ngOnInit() {
  }

}
