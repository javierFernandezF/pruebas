const db = require("../conectWhitDataBase/index");

const nuevocliente = async (req, res) => {
  try {
    const { nombreCliente, direccion, departamento } = req.body;

    const client = await db.query(
      "insert into cliente (nombrecliente, direccion, departamento) values ($1, $2, $3)",
      [nombreCliente, direccion, departamento]
    );

    const newClient = await db.query(
      "select * from cliente where id= (select max(id) from cliente)"
    );

    return res.status(200).json({ data: newClient.rows });
  } catch (error) {
    return res.status(400).json({ data: "error" });
  }
};

module.exports = { nuevocliente };
