import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../services/service.index';
import { Usuario } from '../models/user/user.model';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  recuerdame: boolean = false;
  user: Usuario;
  status: string;
  token: string;
  identity: string;

  constructor(  public _usuario: UsuarioService,
                public router: Router,
                public activatedRoute: ActivatedRoute

  ) {
    this.user = new Usuario();
    }

  ngOnInit() {
    this.logout();
    //this._usuario.estalogueado();
    //console.log('aasd',this._usuario.getToken());
  }

  ingresar(form: { reset: () => void; }) {
    this._usuario.signup(this.user).subscribe(
      response => {
        if (!response.status || response.status != 'error') {
          this.status = 'success';
          this.identity = response;

          // obtener token
          this._usuario.signup(this.user, true).subscribe(
                  response => {

                    if (!response.status || response.status != 'error') {
                      this.token = response;
                      localStorage.setItem('token', this.token);
                      localStorage.setItem('identity', JSON.stringify(this.identity));

                      // redireccionar
                      this.router.navigate(['/dashboard']);
                    } else {
                      this.status = 'error';
                    }
                  },
                  error => {
                    this.status = 'error';
                    console.log(error);
                  }
            );


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

  logout(){
    this.activatedRoute.params
          .subscribe( params => {
      const sure = + params.sure;

          if(sure == 1) {
            localStorage.removeItem('identity');
            localStorage.removeItem('token');
            localStorage.removeItem('usuario');
    
            this.identity = null;
            this.token = null;
            this.router.navigate(['/login']);
          }
    });
  }

}
