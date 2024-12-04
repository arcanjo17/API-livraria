import express from "express";
import AutorControllers from "../controllers/autorControllers.js";

const routes = express.Router();

routes
    .get("/autores", AutorControllers.listarAutor)
    .get("/autores/:id", AutorControllers.buscarPorID)
    .post("/autores", AutorControllers.cadastrarAutor)
    .put("/autores/:id", AutorControllers.alterarAutor)
    .delete("/autores/:id", AutorControllers.deletarAutor)

export default routes;