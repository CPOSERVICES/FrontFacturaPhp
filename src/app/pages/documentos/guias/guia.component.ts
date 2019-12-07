import { Component, OnInit } from '@angular/core';
import { ModalControlService } from 'src/app/services/service.index';

@Component({
  selector: 'app-guia',
  templateUrl: './guia.component.html',
  styles: []
})
export class GuiaComponent implements OnInit {

  constructor(  public _modalControl: ModalControlService) { }

  ngOnInit() {
  }

}
