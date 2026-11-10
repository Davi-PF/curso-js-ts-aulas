// const HomeModel = require("../models/HomeModel");

// GET (Procurar valores na collection)
// HomeModel.find()
//   .then((dados) => console.log(dados))
//   .catch((e) => console.log(e));

// Cadastrar novos valores:
// HomeModel.create({
//   titulo: "Outra coisa qualquer",
//   descricao: "Outra descrição",
// })
//   .then((dados) => console.log(dados))
//   .catch((e) => console.log(e));

exports.paginaInicial = (req, res) => {
  res.render("index");
};

exports.trataPost = (req, res) => {
  res.send(req.body);
  return;
};
