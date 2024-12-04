import ErroBusca from "../erros/ErroBusca.js";

function manipulador404(req, res, next) {
    const erro404 = new ErroBusca();
    next(erro404);
}

export default manipulador404;