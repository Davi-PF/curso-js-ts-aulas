// Closure é a habilidade da função de acessar seu escopo léxico

function retornaFuncao(nome) {
  return function () {
    return nome;
  };
}

const funcao = retornaFuncao("Davi");
const funcao2 = retornaFuncao("Luiz");
console.dir(funcao);
console.dir(funcao2);