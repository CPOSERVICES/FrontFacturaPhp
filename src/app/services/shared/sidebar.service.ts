import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  constructor() { }

  menu : any = [

    {
      titulo: 'Documentos Eléctronicos',
      icono: 'ti-files',
      submenu: [
        { titulo: 'Facturas', url: '/facturas' },
        { titulo: 'Notas de Débito', url: '/notasDebito' },
        { titulo: 'Notas de Crédito', url: '/notasCredito' },
        { titulo: 'Guias', url: '/guias' },
        { titulo: 'Retenciones', url: '/retenciones' },
      ]
    },
    {
      titulo: 'Ventas',
      icono: 'ti-notepad',
      submenu: [
        { titulo: 'Cotizaciones', url: '/cotizaciones' },
        { titulo: 'Clientes', url: '/clientes' },
        { titulo: 'Cobros', url: '/cobros' }
      ]
    },
    {
      titulo: 'Compras',
      icono: 'ti-shopping-cart',
      submenu: [
        { titulo: 'Proveedores', url: '/proveedores' },
        { titulo: 'Pagos', url: '/pagos' },
      ]
    },
    {
      titulo: 'Inventarios',
      icono: 'ti-package',
      submenu: [
        { titulo: 'Productos', url: '/productos' },
      ]
    },
    {
      titulo: 'Contabilidad',
      icono: 'ti-email',
      submenu: [
        { titulo: 'ATS', url: '' },
      ]
    },
  ];
}
