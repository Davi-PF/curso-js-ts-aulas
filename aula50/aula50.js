const conta = (...args) => {
  console.log(args);
};

conta("+", 0, 20, 30, 40, 50);

// const conta = (operador, acumulador, ...numeros) => {
//   console.log(arguments);

//   //   for (let numero of numeros) {
//   //     if (operador === "+") acumulador += numero;
//   //     if (operador === "-") acumulador -= numero;
//   //     if (operador === "/") acumulador /= numero;
//   //     if (operador === "*") acumulador *= numero;
//   //   }

//   //   console.log(acumulador);
// };
// conta("+", 0, 20, 30, 40, 50);

// function funcao([v1,v2,v3]) {
//   console.log(v1, v2, v3);
// }

// funcao(['Luiz Otavio', 'Miranda', 30]);

// function funcao({ nome, sobrenome, idade }) {
//   console.log(nome, sobrenome, idade);
// }

// funcao({ nome: "Davi", sobrenome: "Ferreira", idade: 24 });

// function funcao(a, b = 2, c = 4) {
//   console.log(a + b + c);
// }
// funcao(2, undefined, 20);

// function funcao(a,b,c,d,e,f){
//     console.log(a,b,c,d,e,f);

// }
// funcao(1,2,3);

// argumentos que sustenta todos os argumentos enviados
// function funcao(a, b, c) {
//   let total = 0;
//   for (let argumento of arguments) {
//     total += argumento;
//   }
//   console.log(total, a, b, c);
// }

// funcao(1, 2, 3, 4, 5, 6, 7);

// function funcao() {
//   console.log(arguments);
// }

// funcao("Valor", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
