export class Usuario {

    public id: number;
    public rol_id: number;
    public username: string;
    public password: string;
    public email: string;
    public nombre: string;
    public apellidos: string;
    public createdAt: string;
    public updatedAt: string;
    public img: string;
  constructor() {
      this.id = null
      this.rol_id = null;
      this.username = '';
      this.password = '';
      this.email = '';
      this.nombre = null;
      this.apellidos = null;
      this.createdAt = null;
      this.updatedAt = null;
  }
}