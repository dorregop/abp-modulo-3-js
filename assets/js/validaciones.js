function pedirTexto(campo) {
    while (true) {
        const texto = prompt(`Ingrese el ${campo}:`);
        if (texto === null) {
            return null;
        }
        if (esTextoValido(texto)) {
            return texto.trim();
        }
        alert("Texto inválido.");
    }
}

function esTextoValido(texto) {
    texto = texto.trim();
    if (texto.length === 0) {
        return false;
    }
    for (const caracter of texto) {
        if (!isNaN(caracter) && caracter !== " ") {
            return false;
        }
    }
    return true;
}

function pedirPromedio() {
    let promedio;
    do {
        promedio = Number(prompt(
            "Ingrese el promedio del alumno:\n(NOTA: Las calificaciones van de 1.0 a 7.0)"
        ));
        if (isNaN(promedio)) {
            alert("Debe ingresar un número.");
        } else if (promedio < 1 || promedio > 7) {
            alert("El promedio está fuera del rango [1.0 - 7.0]");
        } else {
            promedio = Number(promedio.toFixed(1));
        }
    } while (isNaN(promedio) || promedio < 1 || promedio > 7);
    return promedio;
}

function validarNombrePersona(texto) {
    if (texto === null) {
        return false;
    }
    texto = texto.trim();
    if (texto === "") {
        return false;
    }
    for (const caracter of texto) {
        if (!isNaN(caracter) && caracter !== " ") {
            return false;
        }
    }
    return true;
}

function pedirId() {
    while (true) {
        const entrada = prompt("Ingrese el ID del alumno:");
        if (entrada === null) {
            return null;
        }
        const id = Number(entrada);
        if (isNaN(id) || id <= 0) {
            alert("Debe ingresar un ID válido.");
            continue;
        }
        return id;
    }
}