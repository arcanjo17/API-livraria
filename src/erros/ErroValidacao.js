import ErroRequisicao from "./ErroRequisicao.js";

class ErroValidacao extends ErroRequisicao {
    constructor(erro) {
        const messageError = Object.values(erro.errors).map(erro => erro.message).join("; ");
        super(`Os seguintes erros foram encontrados - ${messageError}`);
    };
};

export default ErroValidacao;