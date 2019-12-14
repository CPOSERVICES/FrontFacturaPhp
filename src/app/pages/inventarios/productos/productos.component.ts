import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/inventarios/producto.model';
import { UsuarioService, ProductoService } from 'src/app/services/service.index';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  cargando: boolean = true;
  productos: Producto[] = []
  token:string;

  constructor(
    private _usuario: UsuarioService,
    private _producto: ProductoService
  ) { 
    this.token = this._usuario.getToken();
  }

  ngOnInit() {
    this.cargarProductos();
  }

  /*==========================================================
LISTA PLAN DE CUENTAS
===========================================================*/
cargarProductos() {
  //this.cargando = true;
  this._producto.getProductos(this.token).subscribe(
    resp => {
      this.productos = resp.videos;
      //console.log('a', this.productos);
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
      this._producto.delete( this.token, id )
              .subscribe( resp => {
                this.cargarProductos();
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
