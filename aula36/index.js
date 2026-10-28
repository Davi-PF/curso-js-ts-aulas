const frutas = ['Pera', 'Maçã', 'Uva'];

// for (let i = 0; i< frutas.length; i++){
//     console.log(frutas[i])
// }

// for (let i in frutas){
//     console.log(frutas[i]);
// }

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otavio',
    idade: 30
};

// console.log(pessoa.nome);
// console.log(pessoa['nome']);

for (let chave in pessoa){
    console.log(chave, pessoa[chave])
}