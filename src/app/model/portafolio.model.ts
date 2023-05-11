export class Portafolio {
    id?: Number;
    proyecto: String;
    descripcion: String;
    foto: String;

    constructor(proyecto: String, descripcion: String, foto: String) {
        this.proyecto = proyecto;
        this.descripcion = descripcion;
        this.foto = foto;
    }
}