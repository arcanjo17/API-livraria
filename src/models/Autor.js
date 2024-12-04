import mongoose from "mongoose";

const autorSchema = new mongoose.Schema(
    {
        id: {type: mongoose.Schema.Types.ObjectId},
        nome: {type: String, required: [true, "Nome do autor obrigatório."]},
        nacionalidade: {type: String, required: [true, "Nacionalidade do autor obrigatório."]},
    }, {versionKey: false}
);

const autores = mongoose.model("autores", autorSchema);

export default autores;