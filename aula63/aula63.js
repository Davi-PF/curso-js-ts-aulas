const nomes = ["Maria", "João", "Eduardo", "Gabriel", "Júlia"];

// unshift

nomes.splice(0, 0, "Luiz", 'Otavio');
console.log(nomes);

// push - adicionar no final do array

// nomes.splice(nomes.length, 0, "Luiz"); // simulação do push
// console.log(nomes);


// nomes.splice(indice, delete, elem1, elem2, elem3);
// pop

// const removidos = nomes.splice(-1, 1); // Simulando pop

// shift
// const removidos = nomes.splice(0,1); // Removendo o primeiro

// console.log(nomes, removidos);
