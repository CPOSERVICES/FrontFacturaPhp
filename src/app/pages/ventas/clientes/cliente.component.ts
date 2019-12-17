import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/ventas/cliente.model';
import { UsuarioService, ClienteService, ProvinciasService } from 'src/app/services/service.index';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Provincia } from 'src/app/models/provincias/provincias.model';


@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClienteComponent implements OnInit {

  public cliente: Cliente;
  token: string;
  status: string;
  provincias: Provincia[] = [];
  cargando: boolean = true;

  constructor(
    private _usuario: UsuarioService,
    private _cliente: ClienteService,
    private _provincias: ProvinciasService,
    private router: Router
  ) { 
    this.token = this._usuario.getToken();
    
      //this.cliente = new Cliente(0,'','','',0,0,'','','','','',0,'','',0,0,'',0,0,0,0);
  }

  ngOnInit() {
    this.cliente = new Cliente(1,'','','','',0,0,'','','',0,'','',0,0,'',0,0,0,0);
    
    console.log('clientesss',this.cliente);
  }

  registraCliente(forma){
    // this.cliente = new Cliente(0,'','','','',0,0,'','','','','',0,'','',0,0,'',0,0,0,0);
    console.log('clientesss',this.cliente);
     this._cliente.create(this.token, this.cliente).subscribe(
       response => {
         console.log('cliente', response)
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
       },
       error => {
         this.status = "error";
       }
     );
  }


  

}
