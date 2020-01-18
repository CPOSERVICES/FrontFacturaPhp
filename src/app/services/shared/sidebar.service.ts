import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class SidebarService {
  constructor() {}

  menu: any = [
    // {
    //   titulo: 'Documentos Eléctronicos',
    //   icono: 'ti-files',
    //   submenu: [
    //     { titulo: 'Facturas', url: '/factura/nueva' },
    //     { titulo: 'Notas de Débito', url: '/notasDebito' },
    //     { titulo: 'Notas de Crédito', url: '/notasCredito' },
    //     { titulo: 'Guias', url: '/guias' },
    //     { titulo: 'Retenciones', url: '/retenciones' },
    //   ]
    // },
    {
      titulo: "Ventas",
      icono: "ti-notepad",
      submenu: [
        { titulo: "Facturas", url: "/factura/nueva" },
        { titulo: "Pre-factura", url: "/cotizacion" },
        { titulo: "Clientes", url: "/clientes" },
        { titulo: "Cobros", url: "/cobros" }
      ]
    },
    {
      titulo: "Compras",
      icono: "ti-shopping-cart",
      submenu: [
        { titulo: "Proveedores", url: "/proveedores" },
        { titulo: "Pagos", url: "/pagos" },
        { titulo: "Retenciones", url: "/retenciones" }
      ]
    },
    {
      titulo: "Inventarios",
      icono: "ti-package",
      submenu: [{ titulo: "Productos", url: "/productos" }]
    },
    {
      titulo: "Administrador",
      icono: "ti-files",
      submenu: [
        { titulo: "Areas", url: "/areas" },
        { titulo: "Ordenes Trabajo", url: "/ordenesTrabajo" },
        { titulo: "Perfiles Usuario", url: "/perfiles" },
        { titulo: "RR.HH", url: "/colaboradores" },
        { titulo: "Técnicos", url: "/tecnicos" },
        { titulo: "Usuarios", url: "/usuarios" }
      ]
    },
    {
      titulo: 'Recepción',
      icono: 'ti-files',
      submenu: [
        { titulo: 'Ordenes Trabajo', url: '/ordenesTrabajo' },
        { titulo: 'Repuestos', url: '/repuestos' },
        { titulo: 'Vehiculos', url: '/vehiculo' },
        { titulo: 'Notificaciones', url: '/notificaciones' },       
      ]
    },
    {
      titulo: 'Jefe de Técnicos',
      icono: 'ti-files',
      submenu: [
        { titulo: 'Ordenes Trabajo', url: '/ordenesGeneradas' },       
      ]
    },
    {
      titulo: "Técnico",
      icono: "ti-files",
      submenu: [
        { titulo: "Ordenes Trabajo", url: "/ordenesAsignadas" },
      ]
    },
    {
      titulo: "Bodega",
      icono: "ti-files",
      submenu: [
        { titulo: "Ordenes Trabajo", url: "/pedidosTecnico" },
        { titulo: "Productos Pendientes", url: "/productosPendientes" },
      ]
    },
    {
      titulo: "RR.HH",
      icono: "ti-files",
      submenu: [
        { titulo: "Colaboradores", url: "/colaboradores" },
        { titulo: "Roles Pago", url: "/rolesPago" },
        { titulo: "Planificacíon Personal", url: "/agenda" },
      ]
    },
    
    {
      titulo: "Contabilidad",
      icono: "ti-email",
      submenu: [
        { titulo: "Reporte Ventas", url: "/reportesV" },
        { titulo: "Reporte Compras", url: "/reportesC" },
        { titulo: "Reporte Pagos a Realizar", url: "" },
        { titulo: "Reporte Cobors a Realizar", url: "" }
      ]
    }
    /*{
      titulo: 'Contabilidad',
      icono: 'ti-email',
      submenu: [
        { titulo: 'ATS', url: '' },
      ]
    },*/
  ];
}
