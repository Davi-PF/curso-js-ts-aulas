// Minha solução
// function exibirFrases() {
//   const containerExib = document.querySelector(".container");
//   containerExib.innerHTML += `<div></div>`

//   const elementos = [
//     { tag: "p", texto: "Frase 1" }, // 0
//     { tag: "div", texto: "Frase 2" }, // 1
//     { tag: "footer", texto: "Frase 3" }, // 2
//     { tag: "section", texto: "Frase 4" }, // 3
//   ];

//   for (let i = 0; i < elementos.length; i++) {
//     containerExib.querySelector('div').innerHTML += `<${elementos[i].tag}>${elementos[i].texto}</${elementos[i].tag}>`;
//   }
// }

// exibirFrases();

// Solução do curso
const elementos = [
  { tag: "p", texto: "Frase 1" }, // 0
  { tag: "div", texto: "Frase 2" }, // 1
  { tag: "footer", texto: "Frase 3" }, // 2
  { tag: "section", texto: "Frase 4" }, // 3
];
const container = document.querySelector(".container");
const div = document.createElement("div");

// For 1
// for (let i = 0; i < elementos.length; i++) {
//   let { tag, texto } = elementos[i];
//   let tagCriada = document.createElement(tag);
//   tagCriada.innerHTML = texto;
//   div.appendChild(tagCriada);
// }
// For 2
// for (let i = 0; i < elementos.length; i++) {
//   let { tag, texto } = elementos[i];
//   let tagCriada = document.createElement(tag);
//   tagCriada.innerText = texto;
//   div.appendChild(tagCriada);
// }

// For 3
for (let i = 0; i < elementos.length; i++) {
  let { tag, texto } = elementos[i];
  let tagCriada = document.createElement(tag);
  let textoCriado = document.createTextNode(texto);
  tagCriada.appendChild(textoCriado);
  div.appendChild(tagCriada);
}


container.appendChild(div);
