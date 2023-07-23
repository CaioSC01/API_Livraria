import express from "express";
import LivroController from "../Controllers/livrosController";

const router = express.Router();

router.get("/livros", LivroController.listarLivros);

export default router;
