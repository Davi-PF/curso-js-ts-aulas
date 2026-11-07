class Pessoa {
  constructor(nome) {
    this.nome = nome;
  }
}

const nome = "Davi";
const sobrenome = "Prudente";

exports.Pessoa = Pessoa;
exports.nome = nome;
exports.sobrenome = sobrenome;
exports.outraCoisa = "Oi :D";

//  Desse jeito não funciona
// module.exports = {
//   nome,
//   sobrenome,
//   Pessoa,
// };

// exports.outraCoisa = 'OI :D';
// =-=-=-=--=-=-=-=-=-=-==-=-=-=-=-=-=-=-==

// module.exports.nome = "Davi";
// exports.Pessoa = Pessoa;
// this.sobrenome = "Prudente";

// const nome = "Davi";
// const sobrenome = "Ferreira";

// const falaNome = () => nome + " " + sobrenome;

// // module.exports.nome = nome;
// // module.exports.sobrenome = sobrenome;
// // module.exports.falaNome = falaNome;

// // referencia ao 'module.exports'
// exports.nome = nome;
// exports.sobrenome = sobrenome;
// exports.falaNome = falaNome;

// // a palavra this, nesse contexto referencia
// // ao module.exports

// this.qualquerCoisa = "O que eu quiser exportar";

// // console.log(module.exports);
