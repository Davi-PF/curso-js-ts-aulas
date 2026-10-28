// Declaração de função (Function hoisting)
// Declarações desse tipo são elevadas pelo motor do javascript
function falaOi() {
  console.log("Oie");
}

// As funções são First-class objects (Objetos de primeira classe)

// Function expression
const souUmDado = function () {
  console.log("Sou um dado");
};
souUmDado();

// Arrow function
const funcaoArrow = () => {
  console.log("Sou uma arrow function");
};

// dentro de um objeto

const obj = {
    falar: function (){
        console.log('Estou falando...')
    }
};

obj.falar();

// function executaFuncao(funcao) {
//   console.log("Vou executar sua função abaixo:");
//   funcao();
// }

// executaFuncao(souUmDado);
