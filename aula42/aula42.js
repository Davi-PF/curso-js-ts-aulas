// Escreva uma função chamada ePaisagem que recebe dois argumentos
// largura e altura de uma imagem (Number)
// Retorne true se a imagem estiver no modo paisagem.

// function ePaisagem(largura, altura){
//     return largura > altura ? true : false;
// }

// function ePaisagem(largura, altura){
//     return largura > altura;
// }

const ePaisagem = (largura, altura) => largura > altura;

const x = 1920;
const y = 1080;

console.log(ePaisagem(x,y));