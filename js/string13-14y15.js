document.write("Ejercicio 13:<br>");
let texto = prompt("Ingrese un texto");
document.write(texto.toUpperCase());
let longitud = texto.length;
document.write("<br>");
let letra;

document.write("Ejercicio 14:<br>");
for (let i = 0; i < longitud; i++) {
    letra = texto.charAt(i);
    if (i == longitud - 1) {
        document.write(letra);
    } else {
        document.write(letra + "-");
    }
}
document.write("<br>");

document.write("Ejercicio 15:<br>");
texto = texto.toUpperCase();
let contador = 0;
for (let j = 0; j < longitud; j++) {
    letra = texto.charAt(j);
    if ((letra == "A") || (letra == "E") || (letra == "I") || (letra == "O") || (letra == "U")) {
        contador++;
    }
}
document.write("La frase tiene " + contador + " vocales.");