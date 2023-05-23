class Estudiante {
    #nombre;
    #apellido;
    #calificaciones;

    constructor(nombre = "N", apellido = "N", calificaciones) {
        this.#nombre = nombre
        this.#apellido = apellido
        this.#calificaciones = calificaciones
    }

    get nombreCompleto() {
        return this.nombre + " " + this.apellido
        // return `${this.#nombre} ${this.#apellido}`; Otra forma.
    }

    static fromObject (estudiante) {
        return estudiante.nombre + " " + estudiante.apellido;
    }
}

function calcularPromedios (estudiantes) {
    estudiantes.forEach(estudiante => {
        let promedio = 0;
        let sumaCal = 0;
        estudiante.calificaciones.forEach(calificacion => {
            sumaCal = sumaCal + calificacion**2;
        });
        promedio = sumaCal / estudiante.calificaciones.length;
        console.log(Estudiante.fromObject(estudiante) + ` tiene un promedio de ${promedio}`);
    });
}

const estudiantesInfo = [
    { nombre: "Ana", apellido: "Garcia", calificaciones: [3,5,4,4.5] },
    { nombre: "Luis", apellido: "Perez", calificaciones: [4.5,4,4,5] }
];

calcularPromedios(estudiantesInfo);
/*const padre = new Estudiante("Roberto", "Perez");
console.log(padre.nombreCompleto());
console.log(Estudiante.fromObject(padre));*/