import express from "express";

const app = express();
app.use(express.json());

const livros = [
  {
    id: 1,
    titulo: "O Senhor dos Anéis",
  },
  {
    id: 2,
    titulo: "Harry Potter",
  },
];

function searchBook(id) {
  return livros.findIndex((livro) => livro.id === Number(id));
}

app.get("/", (req, res) => {
  res.status(200).send("Curso de Express API");
});

app.get("/livros", (req, res) => {
  res.status(200).json(livros);
});

app.get("/livros/:id", (req, res) => {
  const index = searchBook(req.params.id);

  res.status(200).json(livros[index]);
});

app.post("/livros", (req, res) => {
  livros.push(req.body);
  res.status(201).send("Livro adicionado com sucesso!");
});

app.put("/livros/:id", (req, res) => {
  const index = searchBook(req.params.id);
  livros[index].titulo = req.body.titulo;
  res.status(200).send("Livro atualizado com sucesso!");
});

export default app;
