import { cliente } from '../models/Cliente.js';

class ClienteController{
    static async listarClientes(req, res){
        try{
            const listarClientes = await cliente.find({});
            res.status(200).json(listarClientes);
        } catch (erro){
            res.status(500).json({ message: `${erro.message} - FALHA NA REQUISIÇÃO` });
        }
    }

    static async cadastrarCliente (req, res){
        try{
            const novoCliente = await cliente.create(req.body);
            res.status(201).json({ message: "Cliente cadastrado com sucesso!", cliente: novoCliente });
        }catch (erro){
            res.status(500).json({ message: `${erro.message} - FALHA AO CADASTRAR CLIENTE`})
        }
    }

    static async atualizarCliente(req, res){
        try{
            const id = req.params.id;
            await cliente.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "Cliente atualizado com sucesso!" });
        } catch (erro){
            res.status(500).json({ message: `${erro.message} - FALHA NA ATUALIZAÇÃO DO CLIENTE` });
        }
    }

    static async excluirCliente (req, res){
        try{
            const id = req.params.id;
            await cliente.findByIdAndDelete(id);
            res.status(200).json({ message: "Cliente excluído com sucesso!" });
        } catch(erro){
            res.status(500).json({ message: `${erro.message} - FALHA NA EXCLUSÃO DO CLIENTE` });
        }
    }
}

export default ClienteController;