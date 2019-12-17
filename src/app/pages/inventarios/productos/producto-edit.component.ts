import { Component, OnInit } from '@angular/core';
import { ProductoService, UsuarioService, IceService, IvaService, IrbpnrService } from 'src/app/services/service.index';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from 'src/app/models/inventarios/producto.model';
import { Impuestos } from 'src/app/models/impuestos/impuestos.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-producto-edit',
  templateUrl: './producto-edit.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductoEditComponent implements OnInit {

  producto: Producto;
  impuestosIce: Impuestos[] = [];
  impuestosIva: Impuestos[] = [];
  impuestosIbrnpr: Impuestos[] = [];
  token: string;
  status: string;
  cargando: boolean = true;

  constructor(
    private _producto: ProductoService,
    private _usuario: UsuarioService,
    private _ice: IceService,
    private _iva: IvaService,
    private _ibrnpr: IrbpnrService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { 
    this.token = _usuario.getToken();
    this.producto = new Producto(0,'','','','','',0,0,0,0,0,'',0,0,0);
  }

  ngOnInit() {
    this.getProducto();
    this.getImpuestoIce();
    this.getImpuestoIva();
    this.getImpuestoIbrnpr();
  }

  getImpuestoIce(){
    this._ice.getImpuestoIce(this.token)
        .subscribe( resp => {
          if ( resp.status == 'success' ) {
            this.impuestosIce = resp.data;
          } else {
            
          }
         
        })
  }

  getImpuestoIva(){
    this._iva.getImpuestoIva(this.token)
        .subscribe( resp => {
          this.impuestosIva = resp.data;
        })
  }
  getImpuestoIbrnpr(){
    this._ibrnpr.getImpuestoirbpnr(this.token)
        .subscribe( resp => {
          this.impuestosIbrnpr = resp.data;
        })
  }

  getProducto(){
    this.cargando = true
    this.activatedRoute.params.subscribe(params =>{
      var id = +params['id'];
      this._producto.getProducto(this.token, id).subscribe(
        response => {
          if (response.status == 'success') {
            this.producto = response.data;
            this.cargando = false;
          } else {
            //this.router.navigate(['/inicio']);
            //console.log('errror al actualizar');
          }
        },
        error => {
          this.status = 'error';
          Swal.fire({
            icon: 'warning',
            title: 'Error al cargar producto',
            text: 'Problemas con el Backend, Espere por favor',
            showConfirmButton: false,
            timer: 3000
          });
         this.router.navigate(['/productos']);
        }
      );
    });

  }

  actualizaProducto(forma) {
     this._producto.update(this.token, this.producto).subscribe(
       response => {
         if (response.status == 'success') {
           this.status = 'success';
           Swal.fire({
             icon: response.status,
             title: response.message,
             showConfirmButton: false,
             timer: 1500
           });
           forma.reset();
           this.router.navigate(['/productos']);
         } else {
           this.status = 'error';
           //console.log('status',status)
           Swal.fire({
            icon: response.status,
            title: response.message,
            showConfirmButton: false,
            timer: 1500
          });
         }
       },
       error => {
         this.status = 'error';
         console.log(error);
       }
     );
  }

}
