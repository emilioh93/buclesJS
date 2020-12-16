// <p>1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.</p>
let edad = parseInt(prompt("Introduzca su edad"));

if (edad >= 18) {
    document.write("Es mayor de edad, ya puede conducir.")
} else if (edad < 18) {
    document.write("Es menor de edad, aún no puede conducir.")
} else {
    document.write("El dato ingresado es incorrecto.")
}