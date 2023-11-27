var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
//Criando a rota para executar a função cadastrar
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});

router.post("/jogoEncerrado", function (req, res) {
    usuarioController.jogoEncerrado(req,res);
});
router.get("/mostrarRanking", function (req, res) {
    usuarioController.mostrarRanking(req,res);
});
router.post("/recomendar", function (req, res) {
    usuarioController.recomendar(req,res);
});
router.get("/musicaRecomendada", function (req, res) {
    usuarioController.musicaRecomendada(req,res);
});

module.exports = router;