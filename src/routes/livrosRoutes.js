import express from "express";
import LivroController from "../Controllers/livrosController.js";
import paginar from "../Middlewares/paginar.js";

const router = express.Router();

router
    .get("/livros", LivroController.listarLivros, paginar)
    .get("/livros/busca", LivroController.listarLivroPorFiltro, paginar)
    .get("/livros/:id", LivroController.listarLivroPorId)
    .post("/livros", LivroController.cadastrarLivro)
    .put("/livros/:id", LivroController.atualizarLivro)
    .delete("/livros/:id", LivroController.excluirLivro);

export default router;
