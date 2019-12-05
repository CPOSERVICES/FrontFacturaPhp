import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/inventarios/producto.model';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  cargando: boolean = true;
  productos: Producto[] = []

  constructor() { }

  ngOnInit() {
  }

  cambiarDesde(){}
  borrarProducto(){}
}
