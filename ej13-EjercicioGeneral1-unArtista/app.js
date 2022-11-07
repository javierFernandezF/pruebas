const express = require("express");
const app = express();
const cors = require("cors");
let port = 3500;

const cliente = require("./Routes/cliente");
const pintor = require("./Routes/pintor");
const contrato = require("./Routes/contrato");
const jornada = require("./Routes/jornada");
// const pintoresSinContrato = require("./Routes/pintoresSinContrato");
// const problemasHabituales = require("./Routes/problemasHabituales");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("hello world!");
});

app.use("/cliente", cliente);
app.use("/pintor", pintor);
app.use("/contrato", contrato);
app.use("/jornada", jornada);
// app.use("/pintoresSinContrato", pintoresSinContrato);
// app.use("/problemasHabituales", problemasHabituales);

app.listen(port, () => {
  console.log("Example app liste on port" + port);
});
