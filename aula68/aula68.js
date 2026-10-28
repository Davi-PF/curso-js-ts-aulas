// Retorne a soma do dobro de todos os pares
// -> filtrar pares
// -> dobrar os valores
// -> Reduzir (somar tudo)
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// meu jeito
// const filtrarPares = numeros.filter((valor) => {
//   return valor % 2 === 0;
// });

// const dobrarPares = filtrarPares.map((valor) => valor * 2);

// const somarParesDobrados = dobrarPares.reduce((acumulador, valor) => {
//   acumulador += valor;
//   return acumulador;
// }, 0);

// Jeito do teacher

const numerosPares = numeros
  .filter((valor) => valor % 2 === 0)
  .map((valor) => valor * 2)
  .reduce((acumulador, valor) => (acumulador += valor));

console.log(numerosPares);
