 /* <p>Realiza un script que pida cadenas de texto hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -. Nota: usar confirm() https://www.w3schools.com/jsref/met_win_confirm.asp</p> */
 //  let mensaje = prompt("Ingrese una cadena de texto");
 //  let cadena = confirm(mensaje);

 while (confirm("Pulse Aceptar para ingresar una cadena de texto o Cancelar para salir")) {
     let mensaje = prompt("Ingrese una cadena de texto");
     document.write(mensaje + " - ");
 }