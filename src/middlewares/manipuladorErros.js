import mongoose from "mongoose";
import ErroBase from "../erros/ErrosBase.js";
import ErroRequisicao from "../erros/ErroRequisicao.js";
import ErroValidacao from "../erros/ErroValidacao.js";

function manipuladorErros(erro, req, res, next) {
    if (erro instanceof mongoose.Error.CastError) {
        new ErroRequisicao().enviarMessage(res);
    } else if (erro instanceof mongoose.Error.ValidationError) {
        new ErroValidacao(erro).enviarMessage(res)
    } else if (erro instanceof ErroBase){
        erro.enviarMessage(res);
    } else {
        new ErroBase().enviarMessage(res);
    };
};

export default manipuladorErros;