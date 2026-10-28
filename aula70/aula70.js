// Moldes -> Factory functions | Constructor functions / Classes

// Constructor Function
function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;

  // Trava o objeto criado (p1.nome e p1.sobrenome nesse caso não poderão ser alterados após sua criação)
  // Além disso, não permite criar novos métodos para esse construtor, no caso não poderia fazer p1.fala = function { ... } por exemplo
  Object.freeze(this); 
}

// a palavra new faz: {} <- this (this é palavra chave)
const p1 = new Pessoa("Davi", "Ferreira");
// Object.freeze(p1); // Não permite alterações futuras
// p1.nome = "OUTRA COISA";
console.log(p1);

// Factory Function
// function criaPessoa(nome, sobrenome) {
//   return {
//     nome,
//     sobrenome,
//     nomeCompleto(){
//         return `${this.nome} ${this.sobrenome}`
//     }
//   };
// }

// const p1 = criaPessoa('Davi', 'Ferreira');
// console.log(p1.nomeCompleto);

// new Array(); e []; são a mesma coisa

// const pessoa1 = new Object();
// pessoa1.nome = "Davi";
// pessoa1.sobrenome = "Ferreira";
// pessoa1.idade = 24;
// pessoa1.falarNome = function () {
//   return (`${this.nome} está falando seu nome`);
// };
// pessoa1.getDataNascimento = function(){
//     const dataAtual = new Date();
//     return dataAtual.getFullYear() - this.idade;
// }
// pessoa1.falarNome();
// console.log(pessoa1.getDataNascimento());

// for ( let chave in pessoa1){
//     console.log(pessoa1[chave]);

// }

// const pessoa1 = new Object();
// pessoa1.nome = "Davi";
// pessoa1.sobrenome = "Ferreira";

// const pessoa2 = {
//   nome: "Davi",
//   sobrenome: "Ferreira",
// };

// console.log(pessoa1);
// console.log(pessoa2);

// const pessoa = {
//   nome: "Davi",
//   sobrenome: "Ferreira",
// };

// const chave = 'nome'
// console.log(pessoa[chave]);
// console.log(pessoa['sobrenome']);
// console.log(pessoa.nome);
// console.log(pessoa.sobrenome);
