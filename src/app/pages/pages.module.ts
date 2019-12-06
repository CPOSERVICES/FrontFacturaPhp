import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/*RUTAS*/
import { PAGES_ROUTES } from './pages.routes';

/*MODULOS*/
import { SharedModule } from '../shared/shared.module';

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

/*MODALES*/
import { ModalProductoComponent } from '../components/modal-producto/modal-producto.component';
import { ModalNuevoCobroComponent } from '../components/modal-nuevo-cobro/modal-nuevo-cobro.component';
import { ModalAgendaComponent } from '../components/modal-agenda/modal-agenda.component';




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
    ModalAgendaComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    PAGES_ROUTES
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
  ]
})
export class PagesModule { }
