function realizarOperacion(opcion) {
    switch (opcion) {

        case 1:
            if (alumnos.length >= MAX_ALUMNOS) {
                alert("Curso completo");
                break;
            }

            let nombre = pedirTexto("nombre");
            let apellido = pedirTexto("apellido");
            let edad = pedirEdad();
            let promedio = pedirPromedio();

            let alumno = crearAlumno(contadorId, nombre, apellido, edad, promedio);
            alumnos.push(alumno);
            contadorId++;

            alert("Alumno agregado correctamente");
            break;

        case 2:
            mostrarAlumnosEnTabla(alumnos);
            break;

        case 3:
            buscarAlumno();
            break;

        case 4:
            modificarAlumno();
            break;

        case 5:
            eliminarAlumno();
            break;

        case 6:
            estadisticas();
            break;

        case 7:
            ordenarAlumnos();
            break;

        case 8:
            alert("Saliendo del sistema...");
            break;

        default:
            alert("Opción inválida");
            break;
    }
}