let persona1 = prompt("Ingrese un nombre");
let edad1 = parseInt(prompt("Ingrese edad"));
let persona2 = prompt("Ingrese un nombre");
let edad2 = parseInt(prompt("Ingrese edad"));
let persona3 = prompt("Ingrese un nombre");
let edad3 = parseInt(prompt("Ingrese edad"));

let mayor = Math.max(edad1, edad2, edad3);
if (mayor == edad1) {
    document.write("El mayor es " + persona1 + " con " + edad1 + " años.");
} else if (mayor == edad2) {
    document.write("El mayor es " + persona2 + " con " + edad2 + " años.");
} else if (mayor == edad3) {
    document.write("El mayor es " + persona3 + " con " + edad3 + " años.");
} else {
    document.write("Ingresaste un dato inválido.")
}