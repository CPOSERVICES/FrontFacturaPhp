import { Component, OnInit } from '@angular/core';
import { ModalControlService } from 'src/app/services/service.index';

@Component({
  selector: 'app-modal-agenda',
  templateUrl: './modal-agenda.component.html',
  styles: []
})
export class ModalAgendaComponent implements OnInit {

  constructor(  public _modalControl: ModalControlService

  ) { }

  ngOnInit() {
  }

}
