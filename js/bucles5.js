while (confirm("Pulse Aceptar para ingresar un número o Cancelar para salir.")) {
    let num = parseInt(prompt("Ingrese un número"));
    if (num >= 0 && num <= 99999999) {
        let resto = num % 23;
        switch (resto) {
            case 0:
                document.write("A");
                break;
            case 1:
                document.write("B");
                break;
            case 2:
                document.write("C");
                break;
            case 3:
                document.write("D");
                break;
            case 4:
                document.write("E");
                break;
            case 5:
                document.write("F");
                break;
            case 6:
                document.write("G");
                break;
            case 7:
                document.write("H");
                break;
            case 8:
                document.write("X");
                break;
            case 9:
                document.write("J");
                break;
            case 10:
                document.write("K");
                break;
            case 11:
                document.write("L");
                break;
            case 12:
                document.write("M");
                break;
            case 13:
                document.write("N");
                break;
            case 14:
                document.write("Y");
                break;
            case 15:
                document.write("P");
                break;
            case 16:
                document.write("Q");
                break;
            case 17:
                document.write("R");
                break;
            case 18:
                document.write("S");
                break;
            case 19:
                document.write("T");
                break;
            case 20:
                document.write("Z");
                break;
            case 21:
                document.write("V");
                break;
            case 22:
                document.write("W");
                break;
            default:
                alert("El valor introducido no es un número.");
        }
    } else {
        alert("Elegiste un número negativo o mayor a 99999999");
    }
}