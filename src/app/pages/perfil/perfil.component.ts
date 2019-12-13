import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/service.index';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  
  usuario: any;

  constructor(
    private _usuario: UsuarioService
  ) {
    this.usuario = this._usuario.getIdentity();
   }

  ngOnInit() {
  }

}
