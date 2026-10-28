/* 
Primitivos (imutáveis) - string, number, boolean, undefined, null (bigint, symbol) / Copiado

Referência (mutável) - array, object, function / Passados por referência
*/


const a = {
    nome : 'Davi',
    sobrenome: 'Prudente',
};

const b = {...a};
// const b = a;

a.nome = 'João';
console.log(a);
console.log(b);

// let a = [1,2,3];
// let b = [...a]; // Spread operator
// let c = b;
// console.log(a, b);

// a.push(4);
// console.log(a, b);

// b.pop();
// console.log(a, b);

// a.push('Luiz');
// console.log(a, c);