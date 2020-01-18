import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.component.html',
  styles: []
})
export class VehiculoComponent implements OnInit {

  closeResult: string;

  

  

  ngOnInit() {
  }



  constructor(private modalService: NgbModal) {}

  

  openLg(content) {
    this.modalService.open(content, { size: 'lg' });
  }

  

}
