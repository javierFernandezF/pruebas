//  Crear un programa donde el usuario ingrese en un prompt la temperatura en Celcius
// y el programa muestre en una alerta la temperatura en Fahrenheit.

// relacion : (temp °C × 9/5) + 32 = 32 °F

let temperaturaCelcius = parseInt(prompt("Ingresar temperatra en Celcius"));

let cambiarTemperatura = () => {
  temperaturaF = temperaturaCelcius * (9 / 5) + 32;
  alert("La temperatura en f es: " + temperaturaF);
};

cambiarTemperatura();
