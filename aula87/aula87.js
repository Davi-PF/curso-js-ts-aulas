// Promises

function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== "string") {
      reject("CAI NO ERRO");
      return;
    }
    setTimeout(() => {
      resolve(msg.toUpperCase() + " - Passei na promise");
    }, tempo);
  });
}

// Promise.all Promise.race Promise.resolve Promise.reject

// Promise.reject
function baixaPagina() {
  const emCache = true;

  if (emCache) {
    return Promise.reject("Pagina em cache");
  } else {
    return esperaAi("Baixei a página", 3000);
  }
}

// Promise.resolve
// function baixaPagina() {
//   const emCache = false;

//   if (emCache) {
//     return Promise.resolve("Pagina em cache");
//   } else {
//     return esperaAi("Baixei a página", 3000);
//   }
// }

baixaPagina()
  .then((dadosPagina) => {
    console.log(dadosPagina); // resolve cai aqui
  })
  .catch((e) => console.log('Erro: ' + e)); // reject cai aqui

// const promises = [
//   // "Primeiro valor", // Não é uma promise, então no race sempre retornará
//   esperaAi("Promise 1", rand(1,5)),
//   esperaAi("Promise 2", rand(1,5)),
//   esperaAi("Promise 3", rand(1,5)),
//   // esperaAi(1000, 1000),
//   // "Outro valor", // Não é uma promise, e as promises demoraram então vai retornar esse cara aqui
// ];

// Promise.race(promises)
//   .then(function (valor) {
//     console.log(valor);
//   })
//   .catch(function (erro) {
//     console.log(erro);
//   });

// Promise.all(promises)
//   .then(function (valor) {
//     console.log(valor);
//   })
//   .catch(function (erro) {
//     console.log(erro);
//   });
