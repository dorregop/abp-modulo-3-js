const MAX_ALUMNOS = 20; // cantidad maxima de alumnos en un curso

// Variables globales
let alumnos = [
    { id: 1, nombre: "Juan", apellido: "Pérez", edad: 18, promedio: 6.2 },
    { id: 2, nombre: "María", apellido: "González", edad: 19, promedio: 5.8 },
    { id: 3, nombre: "Carlos", apellido: "Rodríguez", edad: 20, promedio: 4.9 },
    { id: 4, nombre: "Camila", apellido: "Soto", edad: 21, promedio: 6.7 },
    { id: 5, nombre: "Diego", apellido: "Ramírez", edad: 22, promedio: 5.1 },
    { id: 6, nombre: "Fernanda", apellido: "López", edad: 18, promedio: 6.9 },
    { id: 7, nombre: "Javiera", apellido: "Torres", edad: 19, promedio: 6.0 },
    { id: 8, nombre: "Matías", apellido: "Flores", edad: 20, promedio: 4.5 },
    { id: 9, nombre: "Valentina", apellido: "Rojas", edad: 21, promedio: 5.7 },
    { id: 10, nombre: "Tomás", apellido: "Díaz", edad: 23, promedio: 6.3 },
    { id: 11, nombre: "Francisca", apellido: "Castro", edad: 18, promedio: 5.9 },
    { id: 12, nombre: "Benjamín", apellido: "Silva", edad: 19, promedio: 4.8 },
    { id: 13, nombre: "Antonia", apellido: "Muñoz", edad: 20, promedio: 6.5 },
    { id: 14, nombre: "Martín", apellido: "Herrera", edad: 22, promedio: 5.3 },
    { id: 15, nombre: "Isidora", apellido: "Vargas", edad: 21, promedio: 6.1 },
    { id: 16, nombre: "Nicolás", apellido: "Cortés", edad: 20, promedio: 4.7 },
    { id: 17, nombre: "Catalina", apellido: "Reyes", edad: 19, promedio: 6.8 },
    { id: 18, nombre: "Sebastián", apellido: "Ortiz", edad: 23, promedio: 5.0 },
    { id: 19, nombre: "Daniela", apellido: "Morales", edad: 18, promedio: 6.4 }
];
let contadorId = alumnos.length + 1;

document.getElementById("btnIniciar")
    .addEventListener("click", iniciarSistema);

document.getElementById("btnListar")
    .addEventListener("click", () => {
        mostrarAlumnosEnTabla(alumnos);
    });

