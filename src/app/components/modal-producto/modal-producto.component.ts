import { Component, OnInit } from '@angular/core';
import { ModalProductoService } from './modal-producto.service';

@Component({
  selector: 'app-modal-producto',
  templateUrl: './modal-producto.component.html',
  styles: []
})
export class ModalProductoComponent implements OnInit {


  constructor(  public _modalProducto: ModalProductoService

  ) { }

  ngOnInit() {
  }

}
