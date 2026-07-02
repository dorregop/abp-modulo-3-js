function pedirTexto(campo) {
    let texto;
    let esValido;
    do {
        texto = prompt(`Ingrese el ${campo}:`);
        esValido = validarNombrePersona(texto);
        if (!esValido) {
            alert(`${campo} inválido. Intente nuevamente.`);
        }
    } while (!esValido);
    return texto.trim();
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

function pedirNumero(mensaje) {
    let numero;
    do {
        numero = Number(prompt(mensaje));
        if (isNaN(numero)) {
            alert("Debe ingresar un número.");
        }
    } while (isNaN(numero));
    return numero;
}