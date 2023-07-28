import express from "express";
import AutorController from "../Controllers/autoresController.js";
import paginar from "../Middlewares/paginar.js";

const router = express.Router();

router
    .get("/autores", AutorController.listarAutores, paginar)
    .get("/autores/:id", AutorController.listarAutorPorId)
    .post("/autores", AutorController.cadastrarAutor)
    .put("/autores/:id", AutorController.atualizarAutor)
    .delete("/autores/:id", AutorController.excluirAutor);

export default router;
