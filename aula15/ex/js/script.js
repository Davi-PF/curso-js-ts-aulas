const numero = Number(prompt("Digite um número: "));


const numeroTitulo = document.getElementById("numero-titulo");
const texto = document.getElementById("texto");

numeroTitulo.innerHTML = numero;
texto.innerHTML = `<p>Raiz Quadrada: <strong>${Math.sqrt(numero)}</strong></p>`;
texto.innerHTML += `<p>${numero} é inteiro: <strong>${Number.isInteger(numero)}</strong></p>`;
texto.innerHTML += `<p>${numero} é NaN: <strong>${Number.isNaN(numero)}</strong></p>`;
texto.innerHTML += `<p>Arredondando para baixo: <strong>${Math.floor(numero)}</strong></p>`;
texto.innerHTML += `<p>Arredondando para cima: <strong>${Math.ceil(numero)}</strong></p>`;
texto.innerHTML += `<p>Com duas casas decimais: <strong>${numero.toFixed(2)}</strong></p>`;

// document.body.innerHTML = `<h1>O número digitado foi <strong>${numero}</strong></h1>`;
// document.body.innerHTML += `<br /> Raiz Quadrada: <strong>${Math.sqrt(numero)}</strong>`
// document.body.innerHTML += `<br/> ${numero} é inteiro: <strong>${Number.isInteger(numero)}</strong>`
// document.body.innerHTML += `<br/> ${numero} é NaN: <strong>${Number.isNaN(numero)}</strong>`
// document.body.innerHTML += `<br/> Arredondando para baixo: <strong>${Math.floor(numero)}</strong>`
// document.body.innerHTML += `<br/> Arredondando para cima: <strong>${Math.ceil(numero)}</strong>`
// document.body.innerHTML += `<br/> Com duas casas decimais: <strong>${numero.toFixed(2)}</strong>`