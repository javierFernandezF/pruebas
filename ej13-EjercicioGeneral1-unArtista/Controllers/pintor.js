const db = require("../conectWhitDataBase/index");

const ingresarNuevoPintor = async (req, res) => {
  try {
    const { nombre, celular } = req.body;

    const user = await db.query(
      "insert into pintor (nombre,celular) values ($1, $2)",
      [nombre, celular]
    );

    const id = await db.query("SELECT MAX(id) FROM pintor");

    return res
      .status(200)
      .json({ id: id.rows[0].max, name: nombre, phone: celular });
  } catch (error) {
    return res.status(400).json({
      data: "Omar, algo anda mal!",
    });
  }
};

module.exports = { ingresarNuevoPintor };
