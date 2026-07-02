const MAX_ALUMNOS = 20;

let alumnos = [
    { id: 1, nombre: "Juan", apellido: "Pérez", promedio: 6.2 },
    { id: 2, nombre: "María", apellido: "González", promedio: 5.8 },
    { id: 3, nombre: "Carlos", apellido: "Rodríguez", promedio: 4.9 },
    { id: 4, nombre: "Camila", apellido: "Soto", promedio: 6.7 },
    { id: 5, nombre: "Diego", apellido: "Ramírez", promedio: 5.1 },
    { id: 6, nombre: "Fernanda", apellido: "López", promedio: 6.9 },
    { id: 7, nombre: "Javiera", apellido: "Torres", promedio: 6.0 },
    { id: 8, nombre: "Matías", apellido: "Flores", promedio: 4.5 },
    { id: 9, nombre: "Valentina", apellido: "Rojas", promedio: 5.7 },
    { id: 10, nombre: "Tomás", apellido: "Díaz", promedio: 6.3 },
    { id: 11, nombre: "Francisca", apellido: "Castro", promedio: 5.9 },
    { id: 12, nombre: "Benjamín", apellido: "Silva", promedio: 4.8 },
    { id: 13, nombre: "Antonia", apellido: "Muñoz", promedio: 6.5 },
    { id: 14, nombre: "Martín", apellido: "Herrera", promedio: 5.3 },
    { id: 15, nombre: "Isidora", apellido: "Vargas", promedio: 6.1 }
];

let contadorId = alumnos.length + 1;

document.getElementById("btnAgregar")
    .addEventListener("click", agregarAlumno);

document.getElementById("btnBuscar")
    .addEventListener("click", buscarAlumno);

document.getElementById("btnEliminar")
    .addEventListener("click", eliminarAlumno);

document.getElementById("btnEstadisticas")
    .addEventListener("click", estadisticas);

mostrarAlumnosEnTabla(alumnos);