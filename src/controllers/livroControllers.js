import ErroBusca from "../erros/ErroBusca.js";
import {autores, livros} from "../models/index.js";
import ErroRequisicao from "../erros/ErroRequisicao.js"; 

class LivrosControllers {

    static listarLivros = async(req, res, next) => {
        try {
            const buscaLivros = livros.find();

            req.resultado = buscaLivros;

            next();
        } catch(erro) {
            next(erro);
        };
    };

    static buscarPorID = async(req, res, next) => {
        try {
            const buscar = await livros.findById(req.params.id);
            if (buscar !== null) {
                res.status(200).send(buscar);                
            } else {
                next(new ErroBusca("Id do livro não encontrado."))
            };
        } catch(erro) {
            next(erro);
        };
    };

    static cadastrarLivro = async(req, res, next) => {
        try {
            const livro = new livros(req.body);
            const resultado = await livro.save();
            res.status(201).send({message: "Livro cadastrado com sucesso."});
        } catch(erro) {
            next(erro);
        };
    };

    static alterarLivro = async(req, res, next) => {
        try {
            const alterar = await livros.findByIdAndUpdate(req.params.id, req.body);
            if (alterar !== null) {
                res.status(200).send({message: "Livro alterado com sucesso."});
            } else {
                next(new ErroBusca("Id do livro não encontrado."))
            };
        } catch(erro) {
            next(erro);
        };
    };

    static deletarLivro = async(req, res, next) => {
        try {
            const deletar = await livros.findByIdAndDelete(req.params.id);
            if (deletar !== null) {
                res.status(200).send({message: "Livro deletado com sucesso."});
            } else {
                next(new ErroBusca("Id do livro não encontrado."))
            };
        } catch(erro) {
            next(erro);
        };
    };

    static buscarPorFiltro = async(req, res, next) => {
        try {
            const busca = await filtroBusca(req.query);
            if (busca !== null) {
                const resultado = livros.find(busca)//.populate("autor");
                req.resultado = resultado;
                //res.status(200).send(resultado);
                next();
            } else {
                res.status(200).send([]);
            }
        } catch(erro) {
            next(erro);
        };
    };
};

async function filtroBusca(parametro) {
    const {editora, titulo, maxPagina, minPagina, nomeAutor} = parametro;
    let busca = {};

    if(minPagina || maxPagina) paginas.busca = {};

    if(editora) busca.editora = {$regex: editora, $options: "i"};
    if(titulo) busca.titulo = {$regex: titulo, $options: "i"};
    if(minPagina) busca.minPagina.$gte = minPagina;
    if(maxPagina) busca.maxPagina.$lte = maxPagina;

    if(nomeAutor) {
        const autor = await autores.findOne({autor: nomeAutor});

        if (autor !== null) {
            busca.autor = autor._id;            
        } else {
            busca = null;
        };
    };

    return busca;
};

export default LivrosControllers;