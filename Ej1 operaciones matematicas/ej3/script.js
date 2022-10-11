//Pedir un número a un usuario a través de un prompt y luego dividirlo por 10, ejemplo:
//5 / 10 igual 0.5

let number = parseInt(prompt("ingresar numero."));

let dividirEntreDiez = () => {
  let entreDiez = number / 10;
  alert(entreDiez);
};

dividirEntreDiez();
