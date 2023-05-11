export class Persona {
    id?: number;
    nombre: String;
    apellido: String;
    edad: String;
    telefono: String;
    email: String;
    clave: String;
    direccion: String;
    sobremi: String;
    foto: String;

    constructor(nombre: String, apellido: String, edad: String, telefono: String, email: String, clave: String, direccion: String, sobremi: String,foto: String, ){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.telefono = telefono;
    this.email = email;
    this.clave = clave;
    this.direccion = direccion;
    this.sobremi = sobremi;
    this.foto = foto;
    }
}