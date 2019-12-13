
/*PAGES SERVICES*/
export { LoginGuardGuard } from './guards/login-guard.guard';

/*USER SERVICES*/
export { UsuarioService } from './usuario/usuario.service';

/*SHARED SERVICES*/
export { SidebarService } from "./shared/sidebar.service";
export { SharedService } from './shared/shared.service';

/*MODALS SERVICES*/
export { ModalControlService } from '../components/services/modal-control.service';
export { ModalUpdateService } from '../components/modal-update-plan/modal-update.service';

/*SALES SERVICES*/
export { CotizacionService } from './ventas/cotizacion.service';
export { ClienteService } from './ventas/cliente.service';
export { CobroService } from './ventas/cobro.service';

/*PURCHASED SERVICES*/
export { ProveedorService } from './compras/proveedor.service';
export { PagoService } from './compras/pago.service';

/*INVENTORIES SERVICES*/
export { ProductoService } from './inventarios/producto.service';

/*ELECTRONIC DOCUMENTS SERVICES*/
export { FacturaService } from './documentosElectronicos/factura.service';
export { NotaCreditoService } from './documentosElectronicos/nota-credito.service';
export { NotaDeditoService } from './documentosElectronicos/nota-dedito.service';
export { RetencionService } from './documentosElectronicos/retencion.service';
export { GuiaService } from './documentosElectronicos/guia.service';

/*TAXES SERVICES*/
export { IvaService } from './impuestos/iva.service';
export { IceService } from './impuestos/ice.service';
export { IrbpnrService } from './impuestos/irbpnr.service';

/*SERVICES ATS*/
    /*PLAN DE CUENTAS*/
export { PlanCuentasService } from './ats/plan-cuentas.service';








