import { Component, OnInit } from '@angular/core';
import { ModalControlService } from 'src/app/services/service.index';

@Component({
  selector: 'app-cotizacion',
  templateUrl: './cotizacion.component.html',
  styles: []
})
export class CotizacionComponent implements OnInit {

  constructor(  public _modalControl: ModalControlService) { }

  ngOnInit() {
  }

}
