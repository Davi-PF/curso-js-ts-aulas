const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Continue continua para a próxima iteração
// Break finaliza o loop

let i = 0;
while (i < numeros.length) {
  let numero = numeros[i];
  if (i === 2) {
    console.log("Pulei o 2");
    i++;
    continue;
  }
  console.log(numero);
  if (i === 7) {
    console.log("Achei o número 7, fechando programa...");
    i++;
    break;
  }
  i++;
}
