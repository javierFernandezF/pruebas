const express = require("express");
const app = express();
let port = 3500;

const cors = require("cors");
app.use(cors());

const cliente = require("./Routes/cliente");
const contacto = require("./Routes/contrato");
const pintor = require("./Routes/pintor");
const pintoresSinContrato = require("./Routes/pintoresSinContrato");
const problemasHabituales = require("./Routes/problemasHabituales");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("hello world!");
});

app.use("/cliente", cliente);
app.use("/contacto", contacto);
app.use("/pintor", pintor);
app.use("/pintoresSinContrato", pintoresSinContrato);
app.use("/problemasHabituales", problemasHabituales);

app.listen(port, () => {
  console.log("Example app liste on port" + port);
});
