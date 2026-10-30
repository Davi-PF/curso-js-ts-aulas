/*
O termo "Herança" é muito usado para descrever que as características de um objeto são passadas para outro objeto. 
Assim como uma filha ou filho pode herdar características da sua mãe ou pai (geneticamente). 
Por isso estamos usando esse termo para descrever o comportamento desejado. A
lém disso, a maioria das literaturas, incluindo as documentações (como MDN) citam a palavra herança.

Vamos continuar usando o termo "Herança" até o final do curso, porém, Javascript não é uma linguagem que apresenta essa característica em específico, 
portanto não existe "herança" aqui. O que ocorre, na verdade, é "delegação". 
Esse seria o termo mais correto para descrever "Herança" em JS.


*/


// Produto -> aumento, desconto
// Camiseta = cor, caneca = material
function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}

Produto.prototype.aumento = function (quantia) {
  this.preco += quantia;
};

Produto.prototype.desconto = function (quantia) {
  this.preco -= quantia;
};

function Camiseta(nome, preco, cor) {
  Produto.call(this, nome, preco);
  this.cor = cor;
}

Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

Camiseta.prototype.aumento = function (percentual) {
  this.preco = this.preco + this.preco * (percentual / 100);
};

function Caneca(nome, preco, material, estoque) {
  Produto.call(this, nome, preco);
  this.material = material;
  Object.defineProperty(this, "estoque", {
    enumerable: true,
    configurable: false,
    get: function () {
      return estoque;
    },
    set: function (valor) {
      if (typeof valor !== "number") return;
      estoque = valor;
    },
  });
}

Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

const produto = new Produto("Gen", 111);
const camiseta = new Camiseta("Regata", 7.5, "Preta");
const caneca = new Caneca("Caneca", 13, "Plástico", 5);
caneca.estoque = 100;

console.log(caneca.estoque);
console.log(caneca);
console.log(camiseta);
console.log(produto);
