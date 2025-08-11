import mongoose from "mongoose";
import { AutorSchema } from "./Autor.js";
import { ClienteSchema } from "./Cliente.js";

const LivroSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId},
    titulo: { type: String, required: true },
    editora: { type: String },
    paginas: { type: Number },
    autor: { type: AutorSchema },
    emprestado: { type: Boolean, default: false, required: true },
    cliente: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cliente',
        required: function(){
            return this.emprestado;
        }  
    }
}, { versionKey: false });

const livros = mongoose.model("livro", LivroSchema);

export default livros;