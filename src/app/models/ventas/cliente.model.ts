export class Cliente {
    constructor (
    public id: number,
    public nombre: string,
    public tipoidentificacion: string,
    public identificacion: string,
    public direccion: string,
    public telefono: number,
    public celular: number,
    public correoelectronico: string,
    public correosecundario: string,
    public precioventa: string,
    public limitecredito: number,
    public contacto: string,
    public sector: string,
    public vendedor: number,
    public diasplazo: number,
    public excentoiva: string,
    public idciudades: number,
    public idprovincias: number,
    public descuento: number,
    public tolerancia: number,

    ) {
        // this.id = 0;
        // this.nombre = '';
        // this.tipoidentificacion = '01';
        // this.direccion = '';
    }
}