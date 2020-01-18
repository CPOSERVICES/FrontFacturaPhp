import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-areas',
  templateUrl: './areas.component.html',
  styles: []
})
export class AreasComponent implements OnInit {

  closeResult: string;

  

  

  ngOnInit() {
  }



  constructor(private modalService: NgbModal) {}

  

  openLg(content) {
    this.modalService.open(content, { size: 'lg' });
  }

}
