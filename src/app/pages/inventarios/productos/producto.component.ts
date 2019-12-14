import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/inventarios/producto.model';
import { ProductoService, UsuarioService } from 'src/app/services/service.index';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styles: []
})
export class ProductoComponent implements OnInit {

  producto: Producto;
  token: string;
  status: string;

  constructor(
    private _producto: ProductoService,
    private _usuario: UsuarioService,
    private activatedRoute: ActivatedRoute
  ) {
    this.token = _usuario.getToken();
    this.producto = new Producto();
   }

  ngOnInit() {
    //this.getProducto();
  }

  registraProducto( forma){
    console.log('forma', forma.value);
    this._producto.create(this.token, this.producto).subscribe(
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

  getProducto(){
    this.activatedRoute.params.subscribe(params =>{
      var id = +params['id'];
      this._producto.getProducto(this.token, id).subscribe(
        response => {
          console.log ("response.status ",response.status );
          if (response.status == 'success') {
            this.producto = response.data;
            console.log("nada",this.producto);
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

  actualizaProducto(form) {
    console.log(this.producto);
    this._producto.update(this.token, this.producto).subscribe(
      response => {
        if (response.status == 'success') {
          this.status = 'success';
          //this.router.navigate(['/inicio']);
        } else {
          this.status = 'error';
        }
      },
      error => {
        this.status = 'error';
        console.log(error);
      }
    );
  }
}
