export class Experiencia {
    id?: number;
    empresa: String;
    cargo: String;
    inicio: String;
    fin: String;
    descripcion: String;

    constructor(empresa: String, cargo: String, inicio: String, fin: String, descripcion: String) {
        this.empresa = empresa;
        this.cargo = cargo;
        this.inicio = inicio;
        this.fin = fin;
        this.descripcion = descripcion;
    }
}
