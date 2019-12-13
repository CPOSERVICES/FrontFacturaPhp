import { Component, OnInit } from '@angular/core';
import { SidebarService, UsuarioService } from 'src/app/services/service.index';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {

  usuario: any

  constructor(  
    public _sidebar: SidebarService, 
    public _usuario: UsuarioService
  ) { 
    this.usuario = this._usuario.getIdentity();
  }

  ngOnInit() {
  }

}
