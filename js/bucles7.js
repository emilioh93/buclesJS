let num = parseInt(prompt("Ingrese un número"));

// 1 imprimir número la cantidad de veces que indica su valor
// 2 decrementar 1 al número e imprimir la cantidad de veces que indica su valor

if (num > 0 && num <= 50) {
    for (let i = num; i >= 1; i--) {
        for (let repetir = i; repetir >= 1; repetir--) {
            document.write(i);
        }
        document.write("<br>")
    }
} else {
    alert("Ingresaste un número inválido")
}