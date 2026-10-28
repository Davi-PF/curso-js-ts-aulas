// escreva uma função que recebe 2 números e retorne o maior deles

function validarMaior(x,y){
    return x > y ? x : y;

    // if (x > y) return x;
    // return y;

    // if (x > y){
    //     return x;
    // }
    // return y;

    // if(x > y){
    //     return x;
    // } else {
    //     return y;
    // }
}

const max2 = (x, y) => x > y ? x : y;

// const max2 = (x, y) => {
//     return x > y ? x : y;
// }

let n1 = 10;
let n2 = 4;

console.log(max2(n1, n2));