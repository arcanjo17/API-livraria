import ErroBase from "./ErrosBase.js";

class ErroBusca extends ErroBase {
    constructor(message = "Página não encontrada.") {
        super(message, 404);
    };
};

export default ErroBusca;