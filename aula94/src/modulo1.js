// O que é mais visto:
export const nome = "Davi";
export const sobrenome = "Ferreira";
export const idade = 23;

export function soma(x, y) {
  return x + y;
}

// tudo que tem default, é o 'padrão' de exportação, só pode haver 1.
export default class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }
}
// -------------------------------------------------------------------------

// const nome = "Davi";
// const sobrenome = "Ferreira";
// const idade = 23;

// function soma(x, y) {
//   return x + y;
// }

// export default (x, y) => x * y;

// export { nome, sobrenome, idade, soma };

// export const nome = "Davi";
// export const sobrenome = "Ferreira";
// export const idade = 23;

// export default function soma(x, y) {
//   return x + y;
// }

// export class Pessoa {
//   constructor(nome, sobrenome) {
//     this.nome = nome;
//     this.sobrenome = sobrenome;
//   }
// }

// const nome = "Davi";
// const sobrenome = "Ferreira";
// const idade = 23;

// function soma(x, y) {
//   return x + y;
// }

// export { nome as nome2, sobrenome, idade, soma };
