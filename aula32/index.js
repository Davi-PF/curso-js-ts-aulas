// ... rest operator | ... spread operator muda dependendo do contexto.
const numeros = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const [lista1, lista2, lista3] = numeros;
console.log(lista3[2]);

// const [ , [, , seis]] = numeros;
// console.log(seis);

// const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
// // const [um, dois, tres, ...resto] = numeros;
// // console.log(um, dois, tres);
// const [um, , tres, , cinco, ...resto] = numeros;
// console.log(um, tres, cinco);
// console.log(resto);

// let a = "A";
// let b = "B";
// let c = "C";

// const letras = [b, c, a];
// [a, b, c] = letras;

// console.log(a, b, c);
