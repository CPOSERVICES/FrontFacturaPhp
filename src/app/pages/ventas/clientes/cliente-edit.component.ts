import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/ventas/cliente.model';
import { UsuarioService, ClienteService } from 'src/app/services/service.index';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cliente-edit',
  templateUrl: './cliente-edit.component.html',
  styles: []
})
export class ClienteEditComponent implements OnInit {

   cliente: Cliente;
  cargando: boolean
  token: string;
  status: string;
 

  constructor(
    private _usuario: UsuarioService,
    private _cliente: ClienteService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.token = this._usuario.getToken();
   }

  ngOnInit() {
    this.getCliente();
  }

  getCliente(){
    this.cargando = true;
    this.activatedRoute.params.subscribe(params =>{
      var id = +params['id'];
      this._cliente.getCliente(this.token, id).subscribe(
        response => {
          if (response.status == 'success') {
            this.cliente = response.data;
            this.cargando = false;
          } else {

            console.log('error al actualizar');
          }
        },
        error => {
          this.status = 'error';
          console.log(error);
        }
      );
    });

  }

  actualizarCliente(forma){
    this._cliente.update(this.token, this.cliente)
    .subscribe( response => {
      if (response.status == "success") {
        this.status = "success";
        Swal.fire({
          icon: response.status,
          title: response.message,
          showConfirmButton: false,
          timer: 1500
        })
        forma.reset();
        this.router.navigate(['/clientes']);
      } else {
        this.status = "error";
        Swal.fire({
          icon: response.status,
          title: response.message,
          showConfirmButton: false,
          timer: 1500
        });
      }
      
    });
    error => {
      this.status = "error";
    }
  }

}
