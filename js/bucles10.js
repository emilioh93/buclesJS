let filas = parseInt(prompt("Ingresa una cantidad de filas"));
let columnas = parseInt(prompt("Ingresa una cantidad de columnas"));

// 1era celda = filas * columnas
let celda1 = filas * columnas;

document.write("<table border>");

for (let i = 0; i < filas; i++) {
    document.write("<tr>");
    for (let repetir = 0; repetir < columnas; repetir++) {
        document.write("<td>");
        document.write(celda1);
        celda1--;
        document.write("</td>");
    }
    document.write("</tr>");
}

document.write("</table>");