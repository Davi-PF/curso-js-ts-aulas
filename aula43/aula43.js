// Escreva uma função que recebe o número e retorne o seguinte:
// Numero é divisivel por 3 = Fizz
// Numero é divisivel por 5 = Buzz
// Numero é divisivel por 3 e 5 = FizzBuzz
// Numero não é divisivel por 3 e 5 = retorna o próprio numero
// Checar se o número é realmente um número = retorna o próprio numero
// Use a função com números de 0 a 100;

// function fizzBuzz(x){
//     if(x % 3 === 0 && x % 5 === 0){
//         console.log("FizzBuzz");
//     } else if(x % 3 === 0 && x % 5 !== 0){
//         console.log('Fizz');
//     } else if(x % 3 !== 0 && x % 5 === 0){
//         console.log('Buzz');
//     } else if(x % 3 !== 0 && x % 5 !== 0){
//         console.log(x);
//     }
// }

function fizzBuzz(x){
    if(typeof x !== 'number') return numero;
    if(x % 3 === 0 && x % 5 === 0) return 'FizzBuzz';
    if(x % 3 === 0) return 'Fizz';
    if(x % 5 === 0) return 'Buzz';
    return x;
}

for(let i = 0; i <= 100; i++){
    console.log(i, fizzBuzz(i));
}