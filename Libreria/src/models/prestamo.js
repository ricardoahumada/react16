export default class Prestamo {
    constructor(id, libro, fecha_inicio, fecha_fin, id_usuario) {
        this.id = id;
        this.libro = libro;
        this.fecha_inicio = fecha_inicio;
        this.fecha_fin = fecha_fin;
        this.id_usuario = id_usuario;
    }

}