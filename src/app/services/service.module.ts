import  { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SidebarService, SharedService, LoginGuardGuard, UsuarioService, ModalProductoService } from './service.index';

@NgModule({
    imports: [
      CommonModule,
      HttpClientModule
    ],
    providers: [
        LoginGuardGuard,
        SidebarService,
        SharedService,
        UsuarioService,
        ModalProductoService
        //ProductoService,
        //IvaService,
        //IceService,
        //IrbpnrService
    ],
    declarations: []
  })
  export class ServiceModule {}