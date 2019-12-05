import { Component, OnInit } from '@angular/core';
import { ModalControlService } from 'src/app/services/service.index';

@Component({
  selector: 'app-cobro',
  templateUrl: './cobro.component.html',
  styles: []
})
export class CobroComponent implements OnInit {

  constructor(  public _modalControl: ModalControlService
    ) { }

  ngOnInit() {
  }

}
