// Crear un programa que determine si un número introducido en un popup es divisible
// por 11 y 5 o no, mostrar el resultado con console.log

let number = parseInt(prompt("Entregar numero"));

let determinarDivisibilidad = () => {
  if (number % 5 === 0 && number % 11 === 0) {
    console.log("El numero es divisible por 5 y por 11");
  } else if (number % 11 === 0) {
    console.log("El numero es divisible por 11");
  } else if (number % 5 === 0) {
    console.log("El numero es divisible por 5");
  }
};

determinarDivisibilidad();
