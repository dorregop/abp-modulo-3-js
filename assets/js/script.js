const MAX_ALUMNOS = 20;

let alumnos = [

    { id: 1, nombre: "Juan", apellido: "Pérez", promedio: 6.2 },
    { id: 2, nombre: "María", apellido: "González", promedio: 5.8 },
    { id: 3, nombre: "Carlos", apellido: "Rodríguez", promedio: 4.9 },
    { id: 4, nombre: "Ana", apellido: "López", promedio: 7.5 },

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