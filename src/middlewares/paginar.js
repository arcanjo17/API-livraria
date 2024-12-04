import ErroRequisicao from "../erros/ErroRequisicao.js";

async function paginar(req, res, next) {
    try {
        //mostrar quantos livros em cada pagina
        let {limite = 4, pagina = 1, ordenacao = "_id:-1"} = req.query;
                
        let [campoOrdenacao, ordem] = ordenacao.split(":");
        limite = parseInt(limite);
        pagina = parseInt(pagina);
        ordem = parseInt(ordem)

        const resultado = req.resultado
    
        if(limite > 0 && pagina > 0) {
            const resultadoPaginacao = await resultado.find()
            .sort({[campoOrdenacao]: ordem}) //ordenar os livros decrescente (-1) ou crescente (1)
            .skip((pagina - 1) * limite) //responsavel por pular as paginas ignorando os primeiros livros
            .limit(limite) //limitando o numero de livros
            //.populate("autor");
            res.status(200).send(resultadoPaginacao);                
        } else {
            next(new ErroRequisicao())
        }
    } catch(erro) {
        next(erro);
    }
};

export default paginar;