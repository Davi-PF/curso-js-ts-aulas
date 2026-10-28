// Filter -> Sempre retorna um array com a mesma quantidade de elementos ou menos.

// Retorne os números maiores que 10
// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
// const numerosFiltrados = numeros.filter(valor => valor > 10);

// console.log(numerosFiltrados);

// Retorne as pessoas que tem o nome com 5 letras ou mais | a
// Retorne as pessoas com mais de 50 anos                 | b
// Retorne as pessoas cujo nome termina com a             | c
const pessoas = [
  { nome: "Luiz", idade: 62 },
  { nome: "Maria", idade: 23 },
  { nome: "Eduardo", idade: 55 },
  { nome: "Letícia", idade: 19 },
  { nome: "Rosana", idade: 32 },
  { nome: "Wallace", idade: 47 },
];

const a = pessoas.filter((p) => p.nome.length >= 5);
console.log(a);

const b = pessoas.filter((p) => p.idade > 50);
console.log(b);

const c = pessoas.filter((p) => p.nome.toLowerCase().endsWith("a"));
console.log(c);
