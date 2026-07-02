function crearAlumno(id, nombre, apellido, promedio) {
    return { id, nombre, apellido, promedio };
}

function agregarAlumno() {
    if (alumnos.length >= MAX_ALUMNOS) {
        alert("El curso está completo.");
        return;
    }
    const nombre = pedirTexto("nombre");
    if (nombre === null) {
    return;
}
    const apellido = pedirTexto("apellido");
    if (apellido === null) {
        return;
    }
    const promedio = pedirPromedio();
    if (promedio === null) {
        return null;
    }

    const alumno = crearAlumno(
        contadorId,
        nombre,
        apellido,
        promedio
    );

    alumnos.push(alumno);
    contadorId++;
    mostrarAlumnosEnTabla(alumnos);
    alert("Alumno agregado correctamente.");
}

function mostrarAlumnosEnTabla(listaAlumnos) {
    document.getElementById("cantidadAlumnos").textContent =
        `Alumnos registrados: ${listaAlumnos.length} / ${MAX_ALUMNOS}`;
    const tbody = document.getElementById("tablaAlumnos");
    tbody.innerHTML = "";
    if (listaAlumnos.length === 0) {
        tbody.innerHTML =
        `
            <tr>
                <td colspan="5">
                    No existen alumnos registrados.
                </td>
            </tr>
        `;
        return;
    }

    listaAlumnos.forEach(alumno => {
        const fila = document.createElement("tr");
        fila.innerHTML =
        `
            <td>${alumno.id}</td>
            <td>${alumno.nombre}</td>
            <td>${alumno.apellido}</td>
            <td>${alumno.promedio.toFixed(1)}</td>
        `;
        tbody.appendChild(fila);
    });

}

function buscarAlumno() {
    const id = pedirId();
    if (id === null) {
        return;
    }
    const alumno = alumnos.find(alumno => alumno.id === id);
    if (alumno) {
        alert(`ALUMNO ENCONTRADO:\nNombre: ${alumno.nombre}\nApellido: ${alumno.apellido}\nPromedio: ${alumno.promedio.toFixed(1)}`);
    } else {
        alert(`El alumno con el ID: ${id} no existe.`);
    }
}

function eliminarAlumno() {
    const idEliminar = pedirId();
    if (idEliminar === null) {
        return;
    }
    const alumnoEliminar = alumnos.find(alumno => alumno.id === idEliminar);
    if (alumnoEliminar) {
        alumnos = alumnos.filter(alumno => alumno.id !== idEliminar);
        mostrarAlumnosEnTabla(alumnos);
        alert("Alumno eliminado correctamente.");
    } else {
        alert(`El alumno con el ID: ${idEliminar} no existe.`);
    }
}

function estadisticas() {
    let totalAlumnos = alumnos.length;
    if (totalAlumnos === 0) {
        alert("No hay alumnos registrados.");
        return;
    }
    let promedioGeneral = alumnos.reduce((acum, alumno) => acum + alumno.promedio, 0) / totalAlumnos;
    let alumnosAprobados = alumnos.filter(alumno => alumno.promedio >= 4).length;
    let alumnosReprobados = totalAlumnos - alumnosAprobados;
    let alumnoMejor = alumnos.find(alumno => alumno.promedio === Math.max(...alumnos.map(alumno => alumno.promedio)));
    let alumnoPeor = alumnos.find(alumno => alumno.promedio === Math.min(...alumnos.map(alumno => alumno.promedio)));
    alert(
        `ESTADÍSTICAS DEL CURSO:\n\n` +
        `Promedio general: ${promedioGeneral.toFixed(1)}\n` +
        `Alumnos aprobados: ${alumnosAprobados}\n` +
        `Alumnos reprobados: ${alumnosReprobados}\n` +
        `Mejor promedio: ${alumnoMejor.nombre} ${alumnoMejor.apellido} (Promedio: ${alumnoMejor.promedio.toFixed(1)})\n` +
        `Peor promedio: ${alumnoPeor.nombre} ${alumnoPeor.apellido} (Promedio: ${alumnoPeor.promedio.toFixed(1)})`
    );
}
