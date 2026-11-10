const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));

//            Query String
// /profiles/12345?campanha=googleads&nome_capanha=seila

app.get("/", (req, res) => {
  res.send(`
    
        <form action='/' method="POST">
        Nome do cliente: <input type="text" name="nome"><br>
        Outro campo: <input type="text" name = "aquioutrocampo">
        <button>Enviar</button>
        
        </form>
    `);
});

// com a interrogação aqui, ele considera o parametro como 'opcional'
app.get("/testes/:idUsuarios?/:parametro?", (req, res) => {
  console.log(req.params);
  console.log(req.query);
  res.send(req.query.facebookprofile);
});

app.post("/", (req, res) => {
  console.log(req.body);

  res.send(`O que você me enviou foi: ${req.body.nome}`);
});

app.listen(3000, () => {
  console.log("Acessar http://localhost:3000");
  console.log("Servidor sendo executado na porta 3000");
});
