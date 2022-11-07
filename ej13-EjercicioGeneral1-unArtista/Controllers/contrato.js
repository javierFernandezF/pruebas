const db = require("../conectWhitDataBase/index");

const nuevocontrato = async (req, res) => {
  try {
    const { idcliente, listapintores, m2, costo } = req.body;

    await db.query(
      "insert into contrato (idcliente, listapintores, m2, costo) values ($1, $2, $3, $4)",
      [idcliente, listapintores, m2, costo]
    );

    // await db.query(
    //   "insert into contrato (idcliente, listapintores, m2, costo) values ('99', '{2,45,3,5}', '450','7600' )"
    // );

    // const idcontrato = await db.query(
    //   "select idcontrato from contrato idcontrato= (select max(idcontrato) from contrato"
    // );

    const newContract = await db.query(
      "select * from contrato where idcontrato= (select max(idcontrato) from contrato)"
    );

    const idContrato = newContract.rows[0].idcontrato;

    await db.query(
      "insert into estadodecontrato (idcontrato, m2totales, m2hechos) values ($1,$2,0)",
      [idContrato, m2]
    );

    return res.status(200).json({ data: newContract.rows });
  } catch (error) {
    return res.status(400).json({
      data: "Omar, algo anda mal!",
    });
  }
};

module.exports = { nuevocontrato };
