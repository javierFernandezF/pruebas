// Operaciones básicas,Tipos de datos,Prompt y Alert

// Escribir un programa que muestre un prompt donde el usuario ingresa un número,
// luego muestra otro prompt pidiendo otro número, finalmente el programa muestra
// una alerta con el resultado de la suma.

let firstNumber = parseInt(prompt("Escribir numero 1"));
let secondNumber = parseInt(prompt("Escribir numero 2"));

function suma() {
  alert("La suma es " + (firstNumber + secondNumber));
}

suma();
