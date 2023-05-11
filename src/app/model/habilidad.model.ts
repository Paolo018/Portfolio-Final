export class Habilidad {
    id?: Number;
    habilidad: String;
    porcentaje: String;
    clase: String;

    constructor(habilidad: String, porcentaje: String, clase: String) {
        this.habilidad = habilidad;
        this.porcentaje = porcentaje;
        this.clase = clase;
    }
}