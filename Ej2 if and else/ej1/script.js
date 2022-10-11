// Crear un programa que determine si un número introducido en un Prompt es par o
// no, la respuesta será mostrada en una alerta.

let number = parseInt(prompt("Entregar numero"));

let determinarSiEsPar = () => {
  if (number % 2 === 0) {
    return alert("El numero es par");
  }
  alert("El numero es inpar");
};

determinarSiEsPar();
