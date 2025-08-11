import moongose from 'mongoose';

const AutorSchema = new moongose.Schema({
    id: { type: moongose.Schema.Types.ObjectId },
    nome: { type: String, required: true },
    nacionalidade: { type: String },
}, { versionKey: false });

const autor = moongose.model("autores", AutorSchema);

export { autor, AutorSchema };