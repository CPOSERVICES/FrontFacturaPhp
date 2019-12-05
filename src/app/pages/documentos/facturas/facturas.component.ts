import { Component, OnInit } from '@angular/core';
import { Factura } from 'src/app/models/documentosElectronicos/factura.model';


@Component({
  selector: 'app-facturas',
  templateUrl: './facturas.component.html',
  styleUrls: ['./facturas.component.css']
})
export class FacturasComponent implements OnInit {

  cargando: boolean = true;
  facturas: Factura[] = []

  constructor() { }

  ngOnInit() {
  }

  borrarProducto(){}
  cambiarDesde(){}

}
