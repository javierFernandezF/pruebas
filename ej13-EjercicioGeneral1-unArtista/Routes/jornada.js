const express = require("express");
const { ingresarJornadaLaboral } = require("../Controllers/jornada");
const router = express.Router();

router.post("/ingresarjornadalaboral", ingresarJornadaLaboral);

module.exports = router;
