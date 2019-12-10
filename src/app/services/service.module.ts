import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import {
  SidebarService,
  SharedService,
  LoginGuardGuard,
  UsuarioService,
  ModalControlService,
  PlanCuentasService
} from "./service.index";

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [
    LoginGuardGuard,
    SidebarService,
    SharedService,
    UsuarioService,
    ModalControlService,
    PlanCuentasService
    //ProductoService,
    //IvaService,
    //IceService,
    //IrbpnrService
  ],
  declarations: []
})
export class ServiceModule {}
