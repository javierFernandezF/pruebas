const express = require("express");
const router = express.Router();
const { nuevocliente } = require("../Controllers/cliente");

router.post("/nuevocliente", nuevocliente);

module.exports = router;
