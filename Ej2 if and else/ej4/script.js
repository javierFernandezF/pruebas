// Crear un programa que le pida al usuario dos números en un Prompt y luego muestre
// en un alerta el número mayor.

let numberOne = parseInt(prompt("Entregar numero 1"));
let numberTwo = parseInt(prompt("Entregar numero 2"));

if (numberOne > numberTwo) {
  alert("El numero 1 es el mayor y su valor es " + numberOne);
} else if (numberOne < numberTwo) {
  alert("El numero 2 es el mayor y su valor es " + numberTwo);
} else if (numberOne === numberTwo) {
  alert("Los numeros son igual y su valores son " + numberOne);
} else {
  alert("Datos incorrectos");
}
