// Crear un programa que le pida al usuario primero un números al usuario a través de
// un prompt y luego un segundo número para luego mostrar en un alerta el número
// mayor, esta vez realizar el ejercicio ocupando un if ternario.

let numberOne = parseInt(prompt("Ingresar numero 1"));
let numberTwo = parseInt(prompt("Ingresar numero 2"));

numberOne > numberTwo
  ? console.log("El numero 1 es el mayor y su valor es " + numberOne)
  : numberOne < numberTwo
  ? console.log("El numero 2 es el mayor y su valor es " + numberTwo)
  : numberOne === numberTwo
  ? console.log("Los numeros son iguales y su valor es " + numberOne)
  : console.log("Datos erroneos");
