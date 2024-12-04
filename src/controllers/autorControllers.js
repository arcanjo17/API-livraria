import ErroBusca from "../erros/ErroBusca.js";
import {autores} from "../models/index.js";

class AutorControllers {

    static listarAutor = async(req, res, next) => {
        try {
            //throw new Error();
            
            const listar = await autores.find();
            res.status(200).send(listar);
        } catch(erro) {
            next(erro);
        };
    };

    static buscarPorID = async(req, res, next) => {
        try {
            const buscar = await autores.findById(req.params.id);
            if (buscar !== null) {
                res.status(200).send(buscar);                
            } else {
                next(new ErroBusca("Id do autor não encontrado."))
            };
        } catch(erro) {
            next(erro);
        };
    };

    static cadastrarAutor = async(req, res, next) => {
        try {
            const autor = new autores(req.body);
            const resultado = await autor.save();
            res.status(201).send({message: "Autor cadastrado com sucesso."});
        } catch(erro) {
            next(erro);
        };
    };

    static alterarAutor = async(req, res, next) => {
        try {
            const alterar = await autores.findByIdAndUpdate(req.params.id, req.body);
            if (alterar !== null) {
                res.status(200).send({message: "Autor alterado com sucesso."});
            } else {
                next(new ErroBusca("Id do autor não encontrado."))
            };
        } catch(erro) {
            next(erro);
        };
    };

    static deletarAutor = async(req, res, next) => {
        try {
            const deletar = await autores.findByIdAndDelete(req.params.id);
            if (deletar !== null) {
                res.status(200).send({message: "Autor deletado com sucesso."});
            } else {
                next(new ErroBusca("Id do autor não encontrado."))
            };
        } catch(erro) {
            next(erro);
        };
    };
};

export default AutorControllers;