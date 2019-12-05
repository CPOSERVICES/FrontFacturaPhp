import { Component, OnInit } from '@angular/core';
import { Proveedor } from 'src/app/models/compras/proveedor.model';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent implements OnInit {

  cargando: boolean
  proveedores: Proveedor[] = [];

  constructor() { }

  ngOnInit() {
  }

  cambiarDesde(){}
  borrarProducto(){}

}
