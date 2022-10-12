// Crear un programa donde se introduzcan los tres ángulos internos de un triángulo y
// se determine si el triángulo es válido o no.

let one = parseInt(prompt("Primer angulo"));
let two = parseInt(prompt("Segundo angulo"));
let three = parseInt(prompt("Tercer angulo"));

one + two + three === 180 && one > 0 && two > 0 && three > 0
  ? alert("Es un triangulo")
  : alert("No es un triangulo");
