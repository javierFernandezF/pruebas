const express = require("express");
const router = express.Router();
const { nuevocontrato } = require("../Controllers/contrato");

router.post("/nuevocontrato", nuevocontrato);

module.exports = router;
