let num = parseInt(prompt("Ingrese un número"))

if (num > 0 && num <= 50) {
    for (let i = 0; i <= num; i++) {
        for (let repetir = 1; repetir <= i; repetir++) {
            document.write(repetir)

        }
        document.write("<br>")
    }
} else {
    alert("Ingresaste un valor inválido")
}