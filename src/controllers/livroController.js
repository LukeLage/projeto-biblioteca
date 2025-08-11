import livros from '../models/Livros.js';
import { autor } from '../models/Autor.js';

class LivroController {
    static async listarLivros(req, res){
        try{
            const listaLivros = await livros.find({});
            res.status(200).json(listaLivros);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - FALHA NA REQUISIÇÃO` });
        }
    }

    static async listarLivroPorId(req, res){
        try{
            const id = req.params.id;
            const livroEncontrado = await livros.findById(id);
            res.status(200).json(livroEncontrado);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - FALHA NA REQUISIÇÃO DO LIVRO` });
        }
    }

    static async cadastrarLivro (req, res) {
        const novoLivro = req.body;
        
        try {
            const autorEncontrado = await autor.findById(novoLivro.autor);
            const livroCompleto = { ...novoLivro, autor: { ...autorEncontrado._doc }};
            const LivroCriado = await livros.create(livroCompleto);
            res.status(201).json({ message: "criado com sucesso!", livro: novoLivro });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - FALHA AO CADASTRAR LIVRO`})
        }
    }

    static async atualizarLivro(req, res){
        try{
            const id = req.params.id;
            await livros.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "Livro atualizado com sucesso!" });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - FALHA NA ATUALIZAÇÃO DO LIVRO` });
        }
    }

    static async excluirLivro(req, res) {
        try{
            const id = req.params.id;
            await livros.findOneAndDelete(id)
            res.status(200).json({ message: "Livro exluído com sucesso!"})
        } catch (erro){
            res.status(500).json({ message: `${erro.message} - FALHA NA EXCLUSÃO DO LIVRO` });
        }
    }

    static async listarLivrosPorEditora(req, res){
        const editora = req.query.editora;

        try{
            const livrosPorEditora = await livros.find({ editora: editora });
            res.status(200).json(livrosPorEditora);
        }catch (erro){
            res.status(500).json({ message: `${erro.message} - FALHA NA REQUISIÇÃO POR EDITORA` });
        }
    }
};

export default LivroController;