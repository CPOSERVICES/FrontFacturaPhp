import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/ventas/cliente.model';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  cargando: boolean
  clientes: Cliente[] = [];

  constructor() { }

  ngOnInit() {
  }

  cambiarDesde(){}
  borrarCliente(){}
}
