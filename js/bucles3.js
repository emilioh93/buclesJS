 /* <p>Realiza un script que pida cadenas de texto hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -. Nota: usar confirm() https://www.w3schools.com/jsref/met_win_confirm.asp</p> */
 let mensaje = prompt("Ingrese una cadena de texto");
 let cadena = confirm(mensaje);

 while (cadena == true) {
     if (cadena == true) {
         document.write(mensaje + "<br>");
     } else {
         document.write("Apretaste cancelar");
     }
 }