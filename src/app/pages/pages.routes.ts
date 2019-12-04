import { RouterModule, Routes } from "@angular/router";
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PerfilComponent } from './perfil/perfil.component';

/*DOCUMENTOS ELECTRONIOCOS*/
import { FacturasComponent } from './documentos/facturas/facturas.component';
import { FacturaComponent } from './documentos/facturas/factura.component';
import { RetencionesComponent } from './documentos/retenciones/retenciones.component';
import { RetencionComponent } from './documentos/retenciones/retencion.component';
import { GuiasComponent } from './documentos/guias/guias.component';
import { GuiaComponent } from './documentos/guias/guia.component';
import { NotasCreditoComponent } from './documentos/notas-credito/notas-credito.component';
import { NotaCreditoComponent } from './documentos/notas-credito/nota-credito.component';
import { NotasDebitoComponent } from './documentos/notas-debito/notas-debito.component';
import { NotaDebitoComponent } from './documentos/notas-debito/nota-debito.component';
import { CotizacionesComponent } from './ventas/cotizaciones/cotizaciones.component';
import { CotizacionComponent } from './ventas/cotizaciones/cotizacion.component';
import { ClientesComponent } from './ventas/clientes/clientes.component';
import { ClienteComponent } from './ventas/clientes/cliente.component';
import { ProveedoresComponent } from './compras/proveedores/proveedores.component';
import { ProveedorComponent } from './compras/proveedores/proveedor.component';
import { PagosComponent } from './compras/pagos/pagos.component';
import { PagoComponent } from './compras/pagos/pago.component';
import { ProductosComponent } from './inventarios/productos/productos.component';
import { ProductoComponent } from './inventarios/productos/producto.component';
import { AgendaComponent } from './agenda/agenda.component';
import { CobrosComponent } from './ventas/cobros/cobros.component';
import { CobroComponent } from './ventas/cobros/cobro.component';

const pagesRoutes: Routes = [
    {
        path: "",
        component: PagesComponent,
        //canActivate: ,
        children: [
            {
                path: "dashboard",
                component: DashboardComponent,
                data: { titulo: "Dashboard" }
            },
            {
                path: "perfil",
                component: PerfilComponent,
                data: { titulo: "Perfil de Usuario" }
            },
            /*RUTAS DOCUMENTOS ELECTRONICOS*/
            {
                path: "facturas",
                component: FacturasComponent,
                data: { titulo: "Facturas" }
            },
            {
                path: "factura",
                component: FacturaComponent,
                data: { titulo: "Factura" }
            },
            {
                path: "retenciones",
                component: RetencionesComponent,
                data: { titulo: "Retenciones" }
            },
            {
                path: "retencion",
                component: RetencionComponent,
                data: { titulo: "retencion" }
            },
            {
                path: "guias",
                component: GuiasComponent,
                data: { titulo: "Guias" }
            },
            {
                path: "guia",
                component: GuiaComponent,
                data: { titulo: "Guia" }
            },
            {
                path: "notasCredito",
                component: NotasCreditoComponent,
                data: { titulo: "Notas de Crédito" }
            },
            {
                path: "notaCredito",
                component: NotaCreditoComponent,
                data: { titulo: "Nota de Crédito" }
            },
            {
                path: "notasDebito",
                component: NotasDebitoComponent,
                data: { titulo: "Notas de Dédito" }
            },
            {
                path: "notaDebito",
                component: NotaDebitoComponent,
                data: { titulo: "Nota de Dédito" }
            },
            /*VENTAS*/
            {
                path: "cotizaciones",
                component: CotizacionesComponent,
                data: { titulo: "Cotizaciones" }
            },
            {
                path: "cotizacion",
                component: CotizacionComponent,
                data: { titulo: "Cotización" }
            },
            {
                path: "clientes",
                component: ClientesComponent,
                data: { titulo: "Clientes" }
            },
            {
                path: "cliente",
                component: ClienteComponent,
                data: { titulo: "Cliente" }
            },
            {
                path: "cobros",
                component: CobrosComponent,
                data: { titulo: "Cobros" }
            },
            {
                path: "cobro",
                component: CobroComponent,
                data: { titulo: "Cobro" }
            },
            /*COMPRAS*/
            {
                path: "proveedores",
                component: ProveedoresComponent,
                data: { titulo: "Proveedores" }
            },
            {
                path: "proveedor",
                component: ProveedorComponent,
                data: { titulo: "proveedor" }
            },
            {
                path: "pagos",
                component: PagosComponent,
                data: { titulo: "Pagos" }
            },
            {
                path: "pago",
                component: PagoComponent,
                data: { titulo: "pago" }
            },
            /*INVENTARIOS*/
            {
                path: "productos",
                component: ProductosComponent,
                data: { titulo: "Productos" }
            },
            {
                path: "producto",
                component: ProductoComponent,
                data: { titulo: "Producto" }
            },
            /*MI AGENDA*/
            {
                path: "agenda",
                component: AgendaComponent,
                data: { titulo: "Agenda" }
            },

            { path: "", redirectTo: "/dashboard", pathMatch: "full" }
        ]
    }
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);