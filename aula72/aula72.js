// defineProperty - Getter e Setters
function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;
  let estoquePrivado = estoque;
  Object.defineProperty(this, "estoque", {
    enumerable: true, // mostra a chave (chave no for in  |  obj.keys)
    // value: estoque, // Valor
    // writable: true, // posso alterar o valor? true -> sim | false -> não
    configurable: true, // Pode apagar a chave? Pode reconfigurar a chave? true -> sim | false -> não
    get: function () {
      return estoquePrivado;
    },
    set: function (valor) {
      if (typeof valor !== "number") {
        throw new TypeError("Mensagem");
      }
      estoquePrivado = valor;
    },
  });
}

// const p1 = new Produto("Camiseta", 20, 3);
// p1.estoque = '500';
// console.log(p1.estoque);

function criaProduto(nome) {
  return {
    get nome() {
      return nome;
    },
    set nome(valor) {
      valor = valor.replace("coisa.", "");
      nome = valor;
    },
  };
}

const p2 = criaProduto("Camiseta");
p2.nome = "Qualquer coisa.";
console.log(p2.nome);
