// Reduce

// Some todos os números (Reduce)
// Retorne um array com os pares (Filter)
// Retorne um array com o dobro dos valores (Map)
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// soma
// const total = numeros.reduce(function(acumulador, valor, indice, array){
//     acumulador += valor;
//     return acumulador;
// }, 0)

// const total = numeros.reduce(function (acumulador, valor, indice, array) {
//   if (valor % 2 === 0) {
//     acumulador.push(valor);
//   }
//   return acumulador;
// }, []);

const total = numeros.reduce(function (acumulador, valor) {
  acumulador.push(valor * 2);
  return acumulador;
}, []);

// console.log(total);

// Retorne a pessoa mais velha

const pessoas = [
  { nome: "Luiz", idade: 62 },
  { nome: "Maria", idade: 23 },
  { nome: "Eduardo", idade: 55 },
  { nome: "Letícia", idade: 19 },
  { nome: "Rosana", idade: 64 },
  { nome: "Wallace", idade: 47 },
];

// Jeito do teacher
const maisVelha = pessoas.reduce(function (acumulador, valor) {
  if (acumulador.idade > valor.idade) return acumulador;
  return valor;
});

console.log(maisVelha);

// Meu jeito
// let nome = '';

// const pessoaMaisVelha = pessoas.reduce((acumulador, valor) => {
//     if(acumulador < valor.idade){
//         acumulador = valor.idade;
//         nome = valor.nome;
//     }
//     return acumulador;
// }, 0)

// console.log(`A pessoa mais velha é: ${nome}; com ${pessoaMaisVelha} anos.`);
