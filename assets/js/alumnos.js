function crearAlumno(id, nombre, apellido, promedio) {
    return { id, nombre, apellido, promedio };
}

function agregarAlumno() {

    if (alumnos.length >= MAX_ALUMNOS) {
        alert("El curso está completo.");
        return;
    }
    const nombre = pedirTexto("nombre");
    const apellido = pedirTexto("apellido");
    const promedio = pedirPromedio();

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
    const id = pedirNumero("ID del alumno a buscar");
    const alumno = alumnos.find(a => a.id === id);
    if (alumno) {
        alert(`ALUMNO ENCONTRADO:\nNombre: ${alumno.nombre}\nApellido: ${alumno.apellido}\nPromedio: ${alumno.promedio.toFixed(1)}`);
    } else {
        alert(`El alumno con el ID: ${id} no existe.`);
    }
}

function eliminarAlumno() {
    const idEliminar = pedirNumero("ID del alumno a eliminar");
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
    alert("En desarrollo.");
}
