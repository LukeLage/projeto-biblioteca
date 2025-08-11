import mongoose from 'mongoose';

const ClienteSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId},
    nome: {type: String, required: true},
    cpf: {type: String, required: false, unique: false},
    email: {type: String},
    telefone: {type: String,},
}, {versionKey: false} );

const cliente = mongoose.model('Cliente', ClienteSchema);

export { cliente, ClienteSchema }