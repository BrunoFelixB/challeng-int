const express = require("express");
const router = express.Router();
const controller = require("../controllers/uniController");


router.get("/", controller.home);
// chamei o gerenciador de rotas, o verbo http a ser respondido e nos parametetros conectei a rota ao arquivo de controller com o método de resposta

router.get("/all", controller.getAll)
// consulta os dados do banco de dados

router.get("/req", controller.getReq);
// faz a requisição dos dados da API e salva no mongo

router.get("/:id", controller.getbyID)
// consulta os dados do banco de datos

router.post("/create", controller.createUni);
// cria novas universidades

router.patch("/update/:id", controller.updateUniById);
// atualiza os dados

router.delete("/delete/:id", controller.deleteUniById);
// deleta os dados

module.exports = router;