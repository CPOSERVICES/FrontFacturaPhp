import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/ventas/cliente.model';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styles: []
})
export class ClienteComponent implements OnInit {

  cliente: Cliente

  constructor() { }

  ngOnInit() {
  }

  registraCliente(){}
}
