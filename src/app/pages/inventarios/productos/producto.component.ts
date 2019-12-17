import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/inventarios/producto.model';
import { ProductoService, UsuarioService, IceService, IrbpnrService, IvaService } from 'src/app/services/service.index';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Impuestos } from 'src/app/models/impuestos/impuestos.model';


@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styles: []
})
export class ProductoComponent implements OnInit {

  producto: Producto;
  impuestosIce: Impuestos[] = [];
  impuestosIva: Impuestos[] = [];
  impuestosIbrnpr: Impuestos[] = [];

  token: string;
  status: string;
  botonActualiza: boolean = false;

  constructor(
    private _producto: ProductoService,
    private _usuario: UsuarioService,
    private _ice: IceService,
    private _iva: IvaService,
    private _ibrnpr: IrbpnrService,
    private router: Router
  ) {
    this.token = _usuario.getToken();
    this.producto = new Producto(0,'','','','','',0,0,0,0,0,'',0,0,0);
   }

  ngOnInit() {
    this.getImpuestoIce();
    this.getImpuestoIva();
    this.getImpuestoIbrnpr();
  }

  getImpuestoIce(){
    this._ice.getImpuestoIce(this.token)
        .subscribe( resp => {
          this.impuestosIce = resp.data;
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

  registraProducto( forma ){
    console.log('forma',forma);
    this._producto.create(this.token, this.producto).subscribe(
      response => {
        console.log('productoxxx', this.producto);
        if (response.status == "success") {
          this.status = "success";
          Swal.fire({
            icon: response.status,
            title: response.message,
            showConfirmButton: false,
            timer: 1500
          })
          forma.reset();
          this.router.navigate(['/productos']);
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
