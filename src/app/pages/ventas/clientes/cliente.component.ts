import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/ventas/cliente.model';
import { UsuarioService, ClienteService, ProvinciasService } from 'src/app/services/service.index';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Provincia } from 'src/app/models/provincias/provincias.model';


@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styles: []
})
export class ClienteComponent implements OnInit {

  cliente: Cliente;
  token: string;
  status: string;
  provincias: Provincia[] = [];

  constructor(
    private _usuario: UsuarioService,
    private _cliente: ClienteService,
    private _provincias: ProvinciasService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { 
    this.token = this._usuario.getToken();
    
    this.cliente = new Cliente(0,'','','','',0,0,'','','','','',0,'');
  }

  ngOnInit() {
    //this.getCliente();
    //console.log('bbbbb',this.getCliente() );
  }

  registraCliente(forma){
     this._cliente.create(this.token, this.cliente).subscribe(
       response => {
         if (response.status == "success") {
           this.status = "success";
           Swal.fire({
             icon: response.status,
             title: response.message,
             showConfirmButton: false,
             timer: 1500
           })
           forma.reset();
         } else {
           this.status = "error";
           Swal.fire({
             icon: response.status,
             title: response.message,
             showConfirmButton: false,
             timer: 1500
           });
         }
       },
       error => {
         this.status = "error";
       }
     );
  }


  getCliente(){
    this.activatedRoute.params.subscribe(params =>{
      var id = +params['id'];
      this._cliente.getCliente(this.token, id).subscribe(
        response => {
          console.log ("response.status ",response.status );
          if (response.status == 'success') {
            this.cliente = response.data;
            console.log("nada",this.cliente);
          } else {
            //this.router.navigate(['/inicio']);
            console.log('errror al actualizar');
          }
          
        },
        error => {
          this.status = 'error';
          console.log(error);
        }
      );
    });

  }

}
