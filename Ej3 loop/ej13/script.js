// Dibujar los siguientes patrones ocupando document.write, para rellenar
// los espacios vacíos se debe imprimir un espacio vacío.

const asterisco = "*";

const vacio = "&nbsp;";

const cuadrado = () => {
  const filas = 5;
  const columnas = 5;

  for (let i = 0; i <= filas; i++) {
    for (let index = 0; index <= columnas; index++) {
      document.write(asterisco);
    }
    document.write("<br></br>");
  }
};

const cuadradoHueco = () => {
  const filas = 5;
  const columnas = 5;

  for (let i = 1; i <= columnas; i++) {
    if (i == 1 || i == filas) {
      for (let index = 1; index <= filas; index++) {
        document.write(asterisco);
      }
      document.write("<br></br>");
    } else {
      for (let e = 1; e <= filas; e++) {
        if (e == 1 || e == filas) {
          document.write(asterisco);
        } else {
          document.write(vacio + vacio);
        }
      }
      document.write("<br></br>");
    }
  }
};

const tableroDeAjedrez = () => {
  const filas = 7;
  const columnas = 8;

  for (let i = 1; i <= filas; i++) {
    if (i % 2 === 0) {
      for (let index = 1; index <= columnas; index++) {
        index === 1 ? document.write(vacio) : document.write(asterisco);
      }
      document.write("<br></br>");
    } else if (i % 2 != 0) {
      for (let ind = 1; ind <= columnas; ind++) {
        document.write(asterisco);
      }
      document.write("<br></br>");
    }
  }
};

const piramideIzq = () => {
  const filas = 5;
  for (let i = 1; i <= filas; i++) {
    for (let index = 1; index <= i; index++) {
      document.write(asterisco);
    }
    document.write("<br></br>");
  }
};

const diamante = () => {
  const filasHaciaArriba = 9;
  for (let i = 1; i <= filasHaciaArriba; i += 2) {
    for (let index = 1; index <= i; index++) {
      document.write(asterisco);
    }
    document.write("<br></br>");
  }
  const filasHaciaAbajo = 7;

  for (let index = filasHaciaAbajo; index >= 1; index -= 2) {
    for (let i = 1; i <= index; i++) {
      document.write(asterisco);
    }
    document.write("<br></br>");
  }
};

const piramideInvertida = () => {
  const filas = 9;

  for (let index = filas; index >= 1; index -= 2) {
    for (let i = 1; i <= index; i++) {
      document.write(asterisco);
    }
    document.write("<br></br>");
  }
};

const priamideCentrada = () => {
  const filas = 5;
  let espacioEnBlandoMax = 4;
  let cantidadDeAstericos = -1;

  for (let i = 1; i <= filas; i++) {
    espacioEnBlandoMax -= 1;
    cantidadDeAstericos += 2;
    for (let n = espacioEnBlandoMax; n >= 0; n -= 1) {
      document.write(vacio);
      document.write(vacio);
    }
    for (let index = 1; index <= cantidadDeAstericos; index++) {
      document.write(asterisco);
    }
    document.write("<br></br>");
  }
};

priamideCentrada();
