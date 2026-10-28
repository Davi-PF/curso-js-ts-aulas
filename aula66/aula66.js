// Map -> Altera valores do array

// Dobre os números
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const dobro = numeros.map((n) => n * 2);

// const dobro = numeros.map(function (valor) {
//   return valor * 2;
// });

// console.log(dobro);

// Para cada elemento:
// Retorne apenas uma string com o nome da pessoa   | a
// remova apenas a chave nome do objeto             | b
// adicione uma chave id em cada objeto             | c

const pessoas = [
  { nome: "Luiz", idade: 62 },
  { nome: "Maria", idade: 23 },
  { nome: "Eduardo", idade: 55 },
  { nome: "Letícia", idade: 19 },
  { nome: "Rosana", idade: 32 },
  { nome: "Wallace", idade: 47 },
];

const a = pessoas.map((obj) => obj.nome);

console.log(a);

// Jeito que eu fiz
// const b = pessoas.map((obj) => {
//   delete obj.nome;
//   return obj;
// });
// console.log(b);

const idades = pessoas.map((obj) => ({ idade: obj.idade }));
console.log(idades);

// adicione uma chave id em cada objeto             | c
// jeito que eu fiz
// const c = pessoas.map((obj, index) => ({ id: index, ...obj}));

// console.log(c);

// Esse jeito, adiciona a coluna id no objeto original
const comIds = pessoas.map(function (obj, indice) {
  obj.id = (indice + 1) * 1000;
  return obj;
});
console.log(comIds);
