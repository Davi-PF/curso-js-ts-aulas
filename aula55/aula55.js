// IIFE - Immediately invoked function expression
// (function () {
//   console.log(123456);
// })();

(function (idade, peso, altura) {
  const sobrenome = "Ferreira";
  function criaNome(nome) {
    return nome + " " + sobrenome;
  }

  function falaNome() {
    console.log(criaNome("Davi"));
  }

  falaNome();
  console.log(idade, peso, altura);
  
})(24, 65, 1.88);
