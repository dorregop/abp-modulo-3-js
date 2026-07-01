function crearAlumno(id, nombre, apellido, edad, promedio) {
    return { id, nombre, apellido, edad, promedio };
}

function mostrarAlumnosEnTabla(listaAlumnos) {
    const tbody = document.getElementById("tablaAlumnos");

    tbody.innerHTML = "";

    if (listaAlumnos.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="5">No existen alumnos registrados</td>
            </tr>
        `;
        return;
    }

    listaAlumnos.forEach(alumno => {
        const fila = document.createElement("tr");

        fila.innerHTML = `
            <td>${alumno.id}</td>
            <td>${alumno.nombre}</td>
            <td>${alumno.apellido}</td>
            <td>${alumno.edad}</td>
            <td>${alumno.promedio}</td>
        `;

        tbody.appendChild(fila);
    });
}