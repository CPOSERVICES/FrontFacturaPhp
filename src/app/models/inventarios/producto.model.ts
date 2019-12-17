export class Producto {

    constructor (
    public id: number,
    public codigoprincipal: string,
    public nombre: string,
    public detalle: string,
    public tipo: string,
    public codigoauxiliar: string,
    public preciounitario: number,
    public preciounitario1: number,
    public preciounitario2: number,
    public stock: number,
    public stockminimo: number,
    public imagen: string,
    public impuestoIva: number,
    public impuestoIrbpnr?: number,
    public impuestoIce?: number,
    // public idunidadmedida: number


    ) {

        // this.id = 0;
        // this.codigoprincipal = '';
        // this.nombre = '';
        // this.tipo = '';
        // this.preciounitario = 0;
        // this.unidadmedida = 1;
    }
}