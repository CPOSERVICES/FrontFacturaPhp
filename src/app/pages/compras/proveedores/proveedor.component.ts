import { Component, OnInit } from '@angular/core';
import { Proveedor } from 'src/app/models/compras/proveedor.model';

@Component({
  selector: 'app-proveedor',
  templateUrl: './proveedor.component.html',
  styles: []
})
export class ProveedorComponent implements OnInit {

  proveedor: Proveedor

  constructor() { }

  ngOnInit() {
  }

  registraProveedor(){}

}
