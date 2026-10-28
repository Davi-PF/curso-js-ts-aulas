// defineProperty - defineProperties
function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;
  Object.defineProperty(this, "estoque", {
    enumerable: true, // mostra a chave (chave no for in  |  obj.keys)
    value: estoque, // Valor
    writable: true, // posso alterar o valor? true -> sim | false -> não
    configurable: true, // Pode apagar a chave? Pode reconfigurar a chave? true -> sim | false -> não
  });

  //   Object.defineProperties(this, {
  //     nome: {
  //       enumerable: true, // mostra a chave (chave no for in  |  obj.keys)
  //       value: nome, // Valor
  //       writable: true, // posso alterar o valor? true -> sim | false -> não
  //       configurable: true, // Pode apagar a chave? Pode reconfigurar a chave? true -> sim | false -> não
  //     },
  //     preco: {
  //       enumerable: true, // mostra a chave (chave no for in  |  obj.keys)
  //       value: preco, // Valor
  //       writable: true, // posso alterar o valor? true -> sim | false -> não
  //       configurable: true, // Pode apagar a chave? Pode reconfigurar a chave? true -> sim | false -> não
  //     },
  //   });
}

const p1 = new Produto("Camiseta", 20, 3);

console.log(p1);

for (let chave in p1) {
  console.log(chave);
}

// p1.estoque = 50000;
// delete p1.estoque;
// console.log(p1);
