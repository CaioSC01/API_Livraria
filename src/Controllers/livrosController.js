// import NaoEncontrado from "../Erros/NaoEncontrado.js";
import { livros } from "../Models/index.js";

class LivroController {
    static listarLivros = async (req, res, next) => {
        try {
            const livrosResultado = await livros
                .find()
                .populate("autor")
                .exec();

            res.status(200).json(livrosResultado);
        } catch (erro) {
            next(erro);
        }
    };

    static listarLivroPorId = async (req, res, next) => {
        try {
            const id = req.params.id;

            const livroResultados = await livros
                .findById(id)
                .populate("autor", "nome")
                .exec();

            res.status(200).send(livroResultados);
        } catch (erro) {
            next(erro);
        }
    };

    static cadastrarLivros = async (req, res, next) => {
        try {
            let livro = new livros(req.body);

            const livroResultado = await livro.save();

            res.status(201).send(livroResultado.toJSON());
        } catch (erro) {
            next(erro);
        }
    };

    static atualizarLivros = async (req, res, next) => {
        try {
            const id = req.params.id;

            await livros.findByIdAndUpdate(id, { $set: req.body });

            res.status(200).send({ message: "Livro atualizado com sucesso" });
        } catch (erro) {
            next(erro);
        }
    };

    static excluirLivro = async (req, res, next) => {
        try {
            const id = req.params.id;

            await livros.findByIdAndDelete(id);

            res.status(200).send({ message: "Livro removido com sucesso" });
        } catch (erro) {
            next(erro);
        }
    };

    static listarLivroPorFiltro = async (req, res, next) => {
        try {
            const { editora, titulo } = req.query;

            const busca = {};

            if (editora) busca.editora = editora;
            if (titulo) busca.titulo = titulo;

            const livrosResultado = await livros.find(busca);
            res.status(200).send(livrosResultado);
        } catch (erro) {
            next(erro);
        }
    };
}

export default LivroController;
