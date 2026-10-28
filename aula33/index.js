const pessoa = {
  nome: "Luiz",
  sobrenome: "Miranda",
  idade: 30,
  endereco: {
    rua: "Av Brasil",
    numero: 320,
  },
};

const { nome, sobrenome, ...resto } = pessoa;

console.log(nome, sobrenome, resto);

// // atribuição via desestruturação
// const {
//   nome,
//   sobrenome,
//   endereco: { rua: r = 12345, numero }, endereco
// } = pessoa;
// // const nome = pessoa.nome;

// console.log(r, numero, endereco);
