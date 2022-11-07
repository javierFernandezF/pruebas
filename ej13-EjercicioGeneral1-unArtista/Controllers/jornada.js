const db = require("../conectWhitDataBase/index");

const ingresarJornadaLaboral = async (req, res) => {
  try {
    const { idcontrato, idpintor, m2, descripcion, problema } = req.body;

    await db.query(
      "insert into jornada (idcontrato, idpintor, m2, descripcion, problema) values ($1,$2,$3,$4,$5)",
      [idcontrato, idpintor, m2, descripcion, problema]
    );

    const estadoPrevioDelContrato = await db.query(
      "select * from estadodecontrato where idcontrato= ($1)",
      [idcontrato]
    );
    const metrosCuadradosHechos = estadoPrevioDelContrato.rows[0].m2hechos;
    const metrosCuadradosActuales =
      parseInt(metrosCuadradosHechos) + parseInt(m2);

    await db.query(
      "update estadodecontrato set m2hechos = ($1) where idcontrato = ($2)",
      [metrosCuadradosActuales, idcontrato]
    );

    const newContract = await db.query(
      "select * from jornada where idjornada= (select max(idjornada) from jornada)"
    );
    return res.status(200).json({
      id: "id",
      data: newContract.rows,
      nuevosMetros: metrosCuadradosActuales,
    });
  } catch (error) {}
};

module.exports = { ingresarJornadaLaboral };
