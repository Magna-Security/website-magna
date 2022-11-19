/** @format */

var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/ultimas/:idAquario", function (req, res) {
  medidaController.buscarUltimasMedidas(req, res);
});

router.get("/ultimasSuporte/:idAquario", function (req, res) {
  medidaController.buscarUltimasMedidasSuporte(req, res);
});

router.get("/tempo-real/:idAquario", function (req, res) {
  medidaController.buscarMedidasEmTempoReal(req, res);
});

router.get("/tempo-real-suporte/:idAquario", function (req, res) {
  medidaController.buscarMedidasEmTempoRealSuporte(req, res);
});

router.get("/servidor", function (req, res) {
  medidaController.buscarServidores(req, res);
});

module.exports = router;
