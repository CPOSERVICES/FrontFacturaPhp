import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import {
  SidebarService,
  SharedService,
  LoginGuardGuard,
  UsuarioService,
  ModalControlService,
  ModalUpdateService,
  PlanCuentasService,
  ProvinciasService,
  ClienteService,
  ProductoService
} from "./service.index";

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [
    LoginGuardGuard,
    SidebarService,
    SharedService,
    UsuarioService,
    ModalControlService,
    ModalUpdateService,
    PlanCuentasService,
    ClienteService,
    ProductoService,
    ProvinciasService,
    

    //ProductoService,
    //IvaService,
    //IceService,
    //IrbpnrService
  ],
  declarations: []
})
export class ServiceModule {}
