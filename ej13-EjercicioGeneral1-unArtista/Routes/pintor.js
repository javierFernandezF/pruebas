const express = require("express");
const router = express.Router();
const { ingresarNuevoPintor } = require("../Controllers/pintor");

router.post("/nuevopintor", ingresarNuevoPintor);

module.exports = router;
