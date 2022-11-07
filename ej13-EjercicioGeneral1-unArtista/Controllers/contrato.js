const db = require("../conectWhitDataBase/index");

const nuevocontrato = async (req, res) => {
  try {
    const { idcliente, listapintores, m2, costo } = req.body;

    console.log(idcliente);
    console.log(listapintores);
    console.log(m2);
    console.log(costo);

    await db.query(
      "insert into contrato (idcliente, listapintores, m2, costo) values ($1, $2, $3, $4)",
      [idcliente, listapintores, m2, costo]
    );

    // await db.query(
    //   "insert into contrato (idcliente, listapintores, m2, costo) values ('99', '{2,45,3,5}', '450','7600' )"
    // );

    // const newContract = await db.query(
    //   "select * from contrato where id= (select max(id) from cliente)"
    // );

    return res.status(200).json({ data: "newContract.rows" });
  } catch (error) {
    return res.status(400).json({
      data: "Omar, algo anda mal!",
    });
  }
};

module.exports = { nuevocontrato };
