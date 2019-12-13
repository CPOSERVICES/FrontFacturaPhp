import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/service.index';
import { Usuario } from 'src/app/models/user/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {

  usuario: any;
  token: string;

  constructor(
    public _usuario: UsuarioService
  ) {
    this.usuario = this._usuario.getIdentity();
    this.token = this._usuario.getToken();
   }

  ngOnInit() {}

}
