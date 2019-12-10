import { Component, OnInit } from '@angular/core';
import { ModalControlService } from 'src/app/services/service.index';

@Component({
  selector: 'app-modal-subir-excel',
  templateUrl: './modal-subir-excel.component.html',
  styles: []
})
export class ModalSubirExcelComponent implements OnInit {

  constructor(  public _modalControl: ModalControlService

  ) { }

  ngOnInit() {
  }

}
