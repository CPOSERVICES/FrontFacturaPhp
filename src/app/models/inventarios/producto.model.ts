export class Producto {
    id: number;
    codigoprincipal: string
    nombre: string
    detalle: string;
    tipo: string
    codigoauxiliar: string;
    preciounitario: number;
    preciounitario1: number;
    preciounitario2: number;
    stock: number
    stockminimo: number;
    imagen: string;
    impuestoIva: number;
    impuestoIrbpnr: number;
    impuestoIce: number
    unidadmedida: string;

    constructor () {

        this.id = 0;
        this.codigoprincipal = '';
        this.nombre = '';
        this.tipo = '';
        this.preciounitario = 0;
    }
}