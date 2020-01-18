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
import { PlanCuentasComponent } from './plan-cuentas/plan-cuentas.component';
import { LoginGuardGuard } from '../services/service.index';
import { ClienteEditComponent } from './ventas/clientes/cliente-edit.component';
import { ProductoEditComponent } from './inventarios/productos/producto-edit.component';

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
import { UsuariosComponent } from './Administrador/usuarios.component';
import { AreasComponent } from './Administrador/areas.component';
import { PerfilesUsuarioComponent } from './Administrador/perfiles-usuario.component';
import { ComprasComponent } from './reportes/compras/compras.component';
import { VentasComponent } from './reportes/ventas/ventas.component';


const pagesRoutes: Routes = [
    {
        path: "",
        component: PagesComponent,
        //canActivate: [LoginGuardGuard],
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
                path: "factura/:id",
                component: FacturaComponent,
                data: { titulo: "Factura" }
            },
            {
                path: "retenciones",
                component: RetencionesComponent,
                data: { titulo: "Retenciones" }
            },
            {
                path: "retencion/:id",
                component: RetencionComponent,
                data: { titulo: "Retencion" }
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
                path: "cliente/:id",
                component: ClienteEditComponent,
                data: { titulo: "Actualizar Cliente" }
            },
            {
                path: "cliente",
                component: ClienteComponent,
                data: { titulo: "Cliente Nuevo" }
            },
            {
                path: "cobros",
                component: CobrosComponent,
                data: { titulo: "Facturas Pendientes de Pago" }
            },
            {
                path: "cobro/:id",
                component: CobroComponent,
                data: { titulo: "Cuentas por cobrar" }
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
                data: { titulo: "Proveedor" }
            },
            {
                path: "pagos",
                component: PagosComponent,
                data: { titulo: "Pagos" }
            },
            {
                path: "pago",
                component: PagoComponent,
                data: { titulo: "Pago" }
            },
            /*INVENTARIOS*/
            {
                path: "productos",
                component: ProductosComponent,
                data: { titulo: "Productos" }
            },
            {
                path: "producto/:id",
                component: ProductoEditComponent,
                data: { titulo: "Actualizar Producto" }
            },
            {
                path: "producto",
                component: ProductoComponent,
                data: { titulo: "Producto Nuevo" }
            },
            /*MI AGENDA*/
            {
                path: "agenda",
                component: AgendaComponent,
                data: { titulo: "Agenda" }
            },
            /*PLAN DE CUENTAS*/
            {
                path: "planCuentas/:page",
                component: PlanCuentasComponent,
                data: { titulo: "Plan de Cuentas" }
            },
             {
                 path: "planCuentas",
                 component: PlanCuentasComponent,
                 data: { titulo: "Plan de Cuentas" }
             },

             //Administrador
             {
                path: "areas",
                component: AreasComponent,
                data: { titulo: "Áreas de Trabajo" }
            },
            //comun
            {
                path: "ordenesTrabajo",
                component: OrdenesTrabajoComponent,
                data: { titulo: "Ordenes de Trabajo" }
            },
            {
                path: "ordenTrabajo",
                component: OrdenTrabajoComponent,
                data: { titulo: "Orden de Trabajo" }
            },
            {
                path: "editarOrden",
                component: OrdenTrabajoEditarComponent,
                data: { titulo: "Editar Ordenes de Trabajo" }
            },
            {
                path: "historialVehiculo",
                component: HistorialVehiculoComponent,
                data: { titulo: "Historial del Vehiculo" }
            },
            {
                path: "ordenesGeneradas",
                component: OrdenesTrabajoGeneradasComponent,
                data: { titulo: "Ordenes Trabajo Generadas" }
            },
            {
                path: "repuestos",
                component: RepuestosComponent,
                data: { titulo: "Repuestos" }
            },
            {
                path: "vehiculo",
                component: VehiculoComponent,
                data: { titulo: "VehÍculo" }
            },
            {
                path: "clientesRecepcion",
                component: ClientesRComponent,
                data: { titulo: "Clientes Recepcion" }
            },
            {
                path: "ordenesAsignadas",
                component: OrdenesAsignadasComponent,
                data: { titulo: "Ordenes Asignadas Técnico" }
            },
            {
                path: "ordenAsignada",
                component: OrdenAsignadaComponent,
                data: { titulo: "Orden Asignada Técnico" }
            },
            {
                path: "productosPendientes",
                component: ProductosPendientesComponent,
                data: { titulo: "Lista productos penidentes" }
            },
            {
                path: "pedidoTecnico",
                component: PedidoTecnicoComponent,
                data: { titulo: "Pedido a entregar Técnico" }
            },
            {
                path: "pedidosTecnico",
                component: PedidosTecnicoComponent,
                data: { titulo: "Pedidos de Técnico" }
            },
            {
                path: "colaboradores",
                component: ColaboradoresComponent,
                data: { titulo: "Listado Colaboradores" }
            },
            {
                path: "colaborador",
                component: ColaboradorComponent,
                data: { titulo: "Colaborador" }
            },
            {
                path: "rolesPago",
                component: RolesPagoComponent,
                data: { titulo: "Roles de  Pago" }
            },
            {
                path: "rolPago",
                component: RolPagoComponent,
                data: { titulo: "Rol de  Pago" }
            },
            {
                path: "notificaciones",
                component: NotificacionesComponent,
                data: { titulo: "Notificaciones para Clientes" }
            },
            {
                path: "usuarios",
                component: UsuariosComponent,
                data: { titulo: "Usuarios del Sistema" }
            },
            {
                path: "perfiles",
                component: PerfilesUsuarioComponent,
                data: { titulo: " Perfiles Usuarios" }
            },
            {
                path: "reportesV",
                component: VentasComponent,
                data: { titulo: "Reporte Ventas" }
            },
            {
                path: "reportesC",
                component: ComprasComponent,
                data: { titulo: "Reporte Compras" }
            },
            { path: "", redirectTo: "/dashboard", pathMatch: "full" }
        ]
    }
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);