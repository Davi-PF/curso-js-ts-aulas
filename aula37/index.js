// For clássico - Geralmente com iteráveis (array ou strings)
// For in - Retorna o índice ou chave (string, array ou objetos)
// For of - Retorn o valor em si (iteráveis, arrays ou strings)

const pessoa = {
    nome: 'Davi',
    sobrenome: 'Prudente'
};

for (let chave in pessoa){
    console.log(chave, pessoa[chave]);
}

// Isso aqui da erro porque pessoa (objeto) não é iterável
// for (let valor of pessoa){

// }

// const nomes = ["Luiz Otavio", "Davi", "Henrique"];

// for (let i = 0; i < nomes.length; i++) {
//   console.log(nomes[i]);
// }
// console.log("-------------------------");

// for (let i in nomes) {
//   console.log(nomes[i]);
// }

// console.log("-------------------------");

// for (let valor of nomes) {
//   console.log(valor);
// }

// console.log("-------------------------");

// nomes.forEach(function (valor, indice, array) {
//   console.log(valor, indice, array);
// });
