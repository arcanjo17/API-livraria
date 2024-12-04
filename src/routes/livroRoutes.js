import express from "express";
import LivrosControllers from "../controllers/livroControllers.js";
import paginar from "../middlewares/paginar.js";

const routes = express.Router();

routes
    .get("/livros", LivrosControllers.listarLivros, paginar)
    .get("/livros/busca", LivrosControllers.buscarPorFiltro, paginar)
    .get("/livros/:id", LivrosControllers.buscarPorID)
    .post("/livros", LivrosControllers.cadastrarLivro)
    .put("/livros/:id", LivrosControllers.alterarLivro)
    .delete("/livros/:id", LivrosControllers.deletarLivro)

export default routes;