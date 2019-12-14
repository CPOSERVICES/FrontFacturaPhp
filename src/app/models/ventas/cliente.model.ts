export class Cliente {

    constructor (
    public id: number,
    public nombre: string,
    public tipoIdentificacion: string,
    public identificacion: string,
    public direccion: string,
    public telefono: number,
    public celular: number,
    public correcoElectronico: string,
    public correoSecundario: string,
    public createdAt: string,
    public updatedAt: string,
    public precioVenta: string,
    public limiteCredito: number,
    public contacto?: string,
    public sector?: string,
    public vendedor?: number,
    public diasPlazo?: number,
    public excentoIva?: string,
    public idciudades?: number,
    public idprovincias?: number,
    public descuento?: number,
    public tolerancia?: number

    ) {}
}