import { Component, OnInit } from '@angular/core';
import { Guia } from 'src/app/models/documentosElectronicos/guia.model';

@Component({
  selector: 'app-guias',
  templateUrl: './guias.component.html',
  styleUrls: ['./guias.component.css']
})
export class GuiasComponent implements OnInit {

  guias : Guia[] = [];

  cargando: boolean

  constructor() { }

  ngOnInit() {
  }

  cambiarDesde(){}

}
