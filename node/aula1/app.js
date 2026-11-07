// const axios = require("axios");
const { Pessoa } = require("./mod1");
const mod1 = require("./mod1");

const p1 = new Pessoa("Josnei");
console.log(p1);
console.log(mod1);


// axios("https://www.otaviomiranda.com.br/files/json/pessoas.json")
//   .then((response) => response.data)
//   .catch((e) => console.log(e));

// const p1 = new Pessoa("Davi");
// console.log(p1);

// destrucruring
// const { nome, sobrenome, falaNome } = require('./mod1');

// console.log(nome, sobrenome);
// console.log(falaNome());

// const mod1 = require('./mod1');
// const falaNome = mod1.falaNome;

// console.log(falaNome());
