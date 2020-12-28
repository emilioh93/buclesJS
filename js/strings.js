document.write("<b>Ejercicio 13:</b><br>");
let texto = prompt("Ingrese un texto");
document.write(texto.toUpperCase());
let longitud = texto.length;
document.write("<br>");
let letra;

document.write("<b>Ejercicio 14:</b><br>");
for (let i = 0; i < longitud; i++) {
    letra = texto.charAt(i);
    if (i == longitud - 1) {
        document.write(letra);
    } else {
        document.write(letra + "-");
    }
}
document.write("<br>");

document.write("<b>Ejercicio 15:</b><br>");
texto = texto.toUpperCase();
let contador = 0;
for (let j = 0; j < longitud; j++) {
    letra = texto.charAt(j);
    if ((letra == "A") || (letra == "E") || (letra == "I") || (letra == "O") || (letra == "U")) {
        contador++;
    }
}
document.write("La frase tiene " + contador + " vocales.");
document.write("<br>");

document.write("<b>Ejercicio 16:</b><br>");
let invertir = "";
for (let k = 0; k < longitud; k++) {
    letra = texto.charAt(k);
    invertir = letra + invertir;
}
document.write(invertir);
document.write("<br>");

document.write("<b>Ejercicio 17:</b><br>");
let vocales = ["a", "e", "i", "o", "u"];
let textoMin = texto.toLowerCase();
let posicion = 0;
let finalizar = false;

for (let l = 0; l < longitud; l++) {
    for (let m = 0; m < vocales.length; m++) {
        if (vocales[m] == textoMin.charAt(l)) {
            posicion = l;
            finalizar = true;
            break;
        }
    }
    if (finalizar) {
        break;
    }
}
document.write("La primera vocal está en la posición " + posicion);