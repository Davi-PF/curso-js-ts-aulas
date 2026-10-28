/* 
&& -> false && true -> false
|| -> true  || false -> 


FALSY
*false
0
'' "" ``
null / undefined
NaN
*/

// function falaOi (){
//     return 'Oi';
// }

// const vaiExecutar = false;

// console.log(vaiExecutar && falaOi());

// const corUsuario = 'vermelho';
// const corPadrao = corUsuario || 'preto';

// console.log(corPadrao);

const a = 0;
const b = null;
const c = 'false'; // por possuir valor, acaba sendo verdadeiro
const d = false;
const e = NaN;

console.log(a || b || c || d || e);