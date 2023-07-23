import livros from "../Models/Livros.js";

class LivroController {
  static listarLivros = (req, res) => {
    livros.find((err, livros) => {
      res.status(200).json(livros);
    });
  };

  static cadastrarLivros = (req, res) => {
    let livro = new livros(req.body);

    livro.save((err) => {
      if (err) {
        req
          .status(500)
          .send({ message: `${err.message} - falaha ao cadastrar livro.` });
      } else {
        res.status(201).send(livro.toJSON());
      }
    });
  };
}

export default LivroController;
