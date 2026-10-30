/*
Object.values
Object.entries
Object.getOwnPropertyDescriptor(o, 'prop') // pega as propriedades de uma chave
Object.assign(destino, any (quem que é pra usar de fonte))
... (spread)

// Já vimos
Object.keys (retorna as chaves)
Object.freeze (congela o objeto)
Object.defineProperties (define várias propriedades)
Object.defineProperty (define uma propriedade)
*/

const produto = { nome: "Produto", preco: 1.8, material: "porcelana" };
// console.log(Object.entries(produto));

// for(let [chave, valor] of Object.entries(produto)){
//     console.log(chave, valor);
// }
// destruct
for (let valor of Object.entries(produto)) {
  console.log(valor[0], valor[1]);
}

// Object.defineProperty(produto, 'nome', {
//     writable: false,
//     configurable: false,
//     value: 'Qualquer coisa'
// })
// console.log(Object.getOwnPropertyDescriptor(produto, 'nome')); // pega as propriedades de uma chave
// console.log(produto);

// Object.freeze(produto)
// const caneca = { nome: produto.nome, preco: produto.preco };
// produto.nome = 'Outro nome'
// const caneca = Object.assign({}, produto, {material: 'porcelana'});

// const caneca = {
//   ...produto,
//   material: "porcelana",
// };

// console.log(produto);
