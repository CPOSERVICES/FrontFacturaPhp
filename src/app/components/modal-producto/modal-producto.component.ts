import { Component, OnInit } from '@angular/core';
import { ModalControlService } from '../services/modal-control.service';

@Component({
  selector: 'app-modal-producto',
  templateUrl: './modal-producto.component.html',
  styles: []
})
export class ModalProductoComponent implements OnInit {


  constructor(  public _modalControl: ModalControlService,
                


  ) { }

  ngOnInit() {
  }

}
