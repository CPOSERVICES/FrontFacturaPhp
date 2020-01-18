import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-productos-pendientes',
  templateUrl: './productos-pendientes.component.html',
  styles: []
})
export class ProductosPendientesComponent implements OnInit {

  closeResult: string;

  

  

  ngOnInit() {
  }



  constructor(private modalService: NgbModal) {}

  

  openLg(content) {
    this.modalService.open(content, { size: 'lg' });
  }

  
}
