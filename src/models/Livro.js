import mongoose from "mongoose";
import mongooseAutoPopulate from "mongoose-autopopulate";

const livroSchema = new mongoose.Schema(
    {
        id: {type: mongoose.Schema.Types.ObjectId},
        titulo: {type: String, required: [true, "Titulo do livro obrigatório."]},
        editora: {type: String, required: [true, "Editora do livro obrigatório."]},
        autor: {type: mongoose.Schema.Types.ObjectId, ref: "autores", required: [true, "Autor obrigatório."], autopopulate: true},
        paginas: {type: Number, 
            min: [10, "O número de paginas deve estar entre 10 e 5000. Valor fornecido: {VALUE}"], 
            max: [5000, "O número de paginas deve estar entre 10 e 5000. Valor fornecido: {VALUE}"]}
    }, {versionKey: false}
);

livroSchema.plugin(mongooseAutoPopulate);
//livroSchema.plugin(autopopulate);
const livros = mongoose.model("livros", livroSchema);

export default livros;