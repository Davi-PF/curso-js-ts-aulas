const express = require("express");
const app = express();

//      -> Criar  | Ler  | Atualizar | Deletar
// CRUD -> CREATE | READ | UPDATE    | DELETE
//      -> POST   | GET  | PUT       |  DELETE

// http://meusite.com/ <- GET -> entrega a página / ( / -> Raíz)
// http://meusite.com/sobre <- GET -> Entrega a página /sobre
// http://meusite.com/contato <- GET -> Entrega a página /contato

app.get("/", (req, res) => {
  res.send(`
    
        <form action='/' method="POST">
        Nome: <input type="text" name="nome">
        <button>Enviar</button>
        
        </form>
    `);
});

app.post("/", (req, res) => {
  res.send("Recebi o formulário");
});

app.get("/contato", (req, res) => {
  res.send("Obrigado por entrar em contato com a gente!");
});

app.listen(3000, () => {
  console.log("Acessar http://localhost:3000");
  console.log("Servidor sendo executado na porta 3000");
});
