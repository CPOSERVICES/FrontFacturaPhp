import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/inventarios/producto.model';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styles: []
})
export class ProductoComponent implements OnInit {

  producto: Producto;

  constructor() { }

  ngOnInit() {
  }

  registraProducto(){}
}
