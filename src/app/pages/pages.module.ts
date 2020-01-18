import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/*RUTAS*/
import { PAGES_ROUTES } from './pages.routes';

/*MODULOS*/
import { SharedModule } from '../shared/shared.module';
import { PipesModule } from '../pipes/pipes.module';

/*COMPONENTES*/
import { PagesComponent } from './pages.component';
import { AgendaComponent } from './agenda/agenda.component';
import { DashboardComponent } from './dashboard/dashboard.component';

/*USUARIO*/
import { PerfilComponent } from './perfil/perfil.component';

import { FacturasComponent } from './documentos/facturas/facturas.component';
import { FacturaComponent } from './documentos/facturas/factura.component';
import { NotasCreditoComponent } from './documentos/notas-credito/notas-credito.component';
import { NotasDebitoComponent } from './documentos/notas-debito/notas-debito.component';
import { NotaDebitoComponent } from './documentos/notas-debito/nota-debito.component';
import { RetencionesComponent } from './documentos/retenciones/retenciones.component';
import { RetencionComponent } from './documentos/retenciones/retencion.component';
import { GuiasComponent } from './documentos/guias/guias.component';
import { GuiaComponent } from './documentos/guias/guia.component';
import { NotaCreditoComponent } from './documentos/notas-credito/nota-credito.component';
import { CotizacionesComponent } from './ventas/cotizaciones/cotizaciones.component';
import { ClientesComponent } from './ventas/clientes/clientes.component';
import { CobrosComponent } from './ventas/cobros/cobros.component';
import { CotizacionComponent } from './ventas/cotizaciones/cotizacion.component';
import { CobroComponent } from './ventas/cobros/cobro.component';
import { ClienteComponent } from './ventas/clientes/cliente.component';
import { ProveedoresComponent } from './compras/proveedores/proveedores.component';
import { ProveedorComponent } from './compras/proveedores/proveedor.component';
import { PagosComponent } from './compras/pagos/pagos.component';
import { PagoComponent } from './compras/pagos/pago.component';
import { ProductosComponent } from './inventarios/productos/productos.component';
import { ProductoComponent } from './inventarios/productos/producto.component';
import { ProductoEditComponent } from './inventarios/productos/producto-edit.component';
/*ATS*/
import { PlanCuentasComponent } from './plan-cuentas/plan-cuentas.component';

/*MODALES*/
import { ModalProductoComponent } from '../components/modal-producto/modal-producto.component';
import { ModalNuevoCobroComponent } from '../components/modal-nuevo-cobro/modal-nuevo-cobro.component';
import { ModalAgendaComponent } from '../components/modal-agenda/modal-agenda.component';
import { ModalSubirExcelComponent } from '../components/modal-subir-excel/modal-subir-excel.component';
import { ModalUpdatePlanComponent } from '../components/modal-update-plan/modal-update-plan.component';
import { ClienteEditComponent } from './ventas/clientes/cliente-edit.component';
 AreasComponent 
import { OrdenesTrabajoComponent } from './comun/ordenes-trabajo/ordenes-trabajo.component';
import { OrdenTrabajoComponent } from './comun/ordenes-trabajo/orden-trabajo.component';
import { OrdenTrabajoEditarComponent } from './comun/ordenes-trabajo/orden-trabajo-editar.component';
import { HistorialVehiculoComponent } from './comun/ordenes-trabajo/historial-vehiculo.component';
import { OrdenesTrabajoGeneradasComponent } from './jefeTaller/ordenes-trabajo-generadas/ordenes-trabajo-generadas.component';
import { RepuestosComponent } from './recepcion/repuestos/repuestos.component';
import { VehiculoComponent } from './recepcion/vehiculo.component';
import { ClientesRComponent } from './recepcion/clientes-r.component';
import { OrdenesAsignadasComponent } from './tecnico/ordenes-asignadas/ordenes-asignadas.component';
import { OrdenAsignadaComponent } from './tecnico/orden-asignada/orden-asignada.component';
import { ProductosPendientesComponent } from './bodega/productos-pendientes.component';
import { PedidoTecnicoComponent } from './bodega/pedido-tecnico.component';
import { PedidosTecnicoComponent } from './bodega/pedidos-tecnico.component';
import { ColaboradoresComponent } from './RRHH/colaboradores.component';
import { ColaboradorComponent } from './RRHH/colaborador.component';
import { RolesPagoComponent } from './RRHH/roles-pago.component';
import { RolPagoComponent } from './RRHH/rol-pago.component';
import { NotificacionesComponent } from './recepcion/notificaciones/notificaciones.component';

import { AreasComponent } from './Administrador/areas.component';
import { UsuariosComponent } from './Administrador/usuarios.component';
import { PerfilesUsuarioComponent } from './Administrador/perfiles-usuario.component';
import { ComprasComponent } from './reportes/compras/compras.component';
import { VentasComponent } from './reportes/ventas/ventas.component';







 

@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    PerfilComponent,
    FacturasComponent,
    FacturaComponent,
    NotasCreditoComponent,
    NotaCreditoComponent,
    NotasDebitoComponent,
    NotaDebitoComponent,
    RetencionesComponent,
    RetencionComponent,
    GuiasComponent,
    GuiaComponent,
    CotizacionesComponent,
    ClientesComponent,
    CobrosComponent,
    CotizacionComponent,
    CobroComponent,
    ClienteComponent,
    ProveedoresComponent,
    ProveedorComponent,
    PagosComponent,
    PagoComponent,
    ProductosComponent,
    ProductoComponent,
    AgendaComponent,
    ModalProductoComponent,
    ModalNuevoCobroComponent,
    ModalAgendaComponent,
    ModalSubirExcelComponent,
    ModalUpdatePlanComponent,
    PlanCuentasComponent,
    ClienteEditComponent,
    ProductoEditComponent,
    AreasComponent,
    OrdenesTrabajoComponent,
    OrdenTrabajoComponent,
    OrdenTrabajoEditarComponent,
    HistorialVehiculoComponent,
    OrdenesTrabajoGeneradasComponent,
    RepuestosComponent,
    VehiculoComponent,
    ClientesRComponent,
    OrdenesAsignadasComponent,
    OrdenAsignadaComponent,
    ProductosPendientesComponent,
    PedidoTecnicoComponent,
    PedidosTecnicoComponent,
    ColaboradoresComponent,
    ColaboradorComponent,
    RolesPagoComponent,
    RolPagoComponent,
    NotificacionesComponent,
    UsuariosComponent,
    PerfilesUsuarioComponent,
    ComprasComponent,
    VentasComponent,

  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    PAGES_ROUTES,
    PipesModule 
  ],
  exports:[
    DashboardComponent,
    PerfilComponent,
    FacturasComponent,
    FacturaComponent,
    NotasCreditoComponent,
    NotaCreditoComponent,
    NotasDebitoComponent,
    NotaDebitoComponent,
    RetencionesComponent,
    RetencionComponent,
    GuiasComponent,
    GuiaComponent,
    ModalSubirExcelComponent,
    ModalUpdatePlanComponent
  ]
})
export class PagesModule { }
