exports.paginaInicial = (req, res) => {
  console.log(req.flash("error"), req.flash("success"), req.flash("info"));

  // req.flash("info", "Olá Mundo!");
  // req.flash("error", "awajdiuwajd!");
  // req.flash("success", "BlaAAAAAAAAAAAAAAAAAAAh");

  // req.session.usuario = { nome: "Davi", logado: true };
  // console.log(req.session.usuario);

  res.render("index");
  return;
};

exports.trataPost = (req, res) => {
  res.send(req.body);
  return;
};
