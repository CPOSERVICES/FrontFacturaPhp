import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/ventas/cliente.model';
import { UsuarioService, ClienteService } from 'src/app/services/service.index';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  cargando: boolean
  clientes: Cliente[] = [];
  token: string

  constructor(
    private _usuario: UsuarioService,
    private _cliente: ClienteService
  ) { 
    this.token = _usuario.getToken()
  }

  ngOnInit() {
    this.cargarClientes();
  }

/*==========================================================
LISTA PLAN DE CUENTAS
===========================================================*/
cargarClientes() {
  //this.cargando = true;
  this._cliente.getClientes(this.token).subscribe(
    resp => {
      this.clientes = resp.data;
      
      //this.cuentas = resp.data;
      //console.log('a', this.clientes);
      
     
    });
}

/*==========================================================
ELIMINA UNA CUENTA
===========================================================*/
deleteCuenta( id ){
  Swal.fire({
    title: 'Estas seguro?',
    text: 'Se eliminara: ',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Eliminar',
  })
  .then( (borrar) => {
    if (borrar.value) {
      this._cliente.delete( this.token, id )
              .subscribe( resp => {
                this.cargarClientes();
                    Swal.fire({
                      showConfirmButton: false,
                      timer: 1500,
                      title: resp.message,
                      icon: resp.status,
                    });
              });
    }
  });
}

  cambiarDesde(){}
}
