import { Component, OnInit } from '@angular/core';
import { ModalControlService } from 'src/app/services/service.index';

@Component({
  selector: 'app-nota-credito',
  templateUrl: './nota-credito.component.html',
  styles: []
})
export class NotaCreditoComponent implements OnInit {

  constructor(  public _modalControl: ModalControlService

  ) { }

  ngOnInit() {
  }

}
