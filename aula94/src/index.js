import Pessoa, { nome, sobrenome } from "./modulo1";

const p1 = new Pessoa(nome, sobrenome);

console.log(p1);

// import o, { nome as n, sobrenome, idade, soma } from "./modulo1";
// console.log(o(5, 40));
// console.log(n, sobrenome, idade, soma(4,4));

// importar qualquer coisa sem { ... } irá trazer o 'default'
// import qualquerNome from "./modulo1";

// importando o default (padrão do export)
// console.log(qualquerNome(5,5));

// import * as MeuModulo from "./modulo1";

// console.log(MeuModulo);

// import { nome, sobrenome, idade, soma, Pessoa } from "./modulo1";

// const p1 = new Pessoa("Davi", "Prudente");
// console.log(p1);
