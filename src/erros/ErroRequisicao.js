import ErroBase from "./ErrosBase.js";

class ErroRequisicao extends ErroBase {
    constructor(message = "Um ou mais dados fornecidos estão incorretos.") {
        super(message, 400);
    };
};

export default ErroRequisicao;