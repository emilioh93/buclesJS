let texto = prompt("Ejercicio 13 y 14: Ingrese un texto");
document.write(texto.toUpperCase());
let longitud = texto.length;
document.write("<br>");
for (let i = 0; i < longitud; i++) {
    let letra = texto.charAt(i);
    if (i == longitud - 1) {
        document.write(letra);
    } else {
        document.write(letra + "-");
    }
}