// Crear un programa que determine si un número introducido en un Prompt es
// divisible por 5 o no, mostrar el resultado con console.log

let number = parseInt(prompt("Entregar numero"));

let divisiblePorCinco = () => {
  if (number % 5 === 0) {
    return console.log("El numero es divisible por 5");
  }

  console.log("El numbero no es divisible por 5");
};

divisiblePorCinco();
