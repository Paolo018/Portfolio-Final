export class Estudio {
    id?: number;
    titulo: String;
    institucion: String;
    inicio: String;
    fin: String;
    descripcion: String;

    constructor(titulo: String, institucion: String, inicio: String, fin: String, descripcion: String) {
        this.titulo = titulo;
        this.institucion = institucion;
        this.inicio = inicio;
        this.fin = fin;
        this.descripcion = descripcion;
    }
}
