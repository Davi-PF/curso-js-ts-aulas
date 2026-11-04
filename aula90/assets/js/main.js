// Fetch API

// const request = (obj) => {
//   return new Promise((resolve, reject) => {
//     const xhr /*xmlHttpRequest*/ = new XMLHttpRequest();
//     xhr.open(obj.method, obj.url, true);
//     xhr.send(null); // POST

//     xhr.addEventListener("load", () => {
//       if (xhr.status >= 200 && xhr.status < 300) {
//         resolve(xhr.responseText);
//       } else {
//         reject(xhr.statusText);
//       }
//     });
//   });
// };

document.addEventListener("click", (e) => {
  const el = e.target;
  const tag = el.tagName.toLowerCase();

  if (tag === "a") {
    e.preventDefault();
    carregaPagina(el);
  }
});

// Adaptando para Async - Await
async function carregaPagina(el) {
  try {
    const href = el.getAttribute("href");
    const response = await fetch(href);

    if (response.status !== 200) throw new Error("Erro 404!");

    const html = await response.text();
    carregaResultado(html);
  } catch (e) {
    console.error("Erro: ", e);
  }

  // isso abaixo é o mesmo que as linhas 32~38
  // fetch(href)
  //   .then((response) => {
  //     if (response.status !== 200) throw new Error("Erro 404!");
  //     return response.text();
  //   })
  //   .then((html) => carregaResultado(html))
  //   .catch((e) => console.error(e));
}

function carregaResultado(response) {
  const resultado = document.querySelector(".resultado");
  resultado.innerHTML = response;
}

// Fetch API (AULA)

// fetch("pagina4.html", {})
//   .then((resposta) => {
//     if (resposta.status !== 200) throw new Error("Erro 404 NOSSO HHAHAHAHH");
//     return resposta.text();
//   })
//   .then((html) => console.log(html))
//   .catch((e) => console.error(e));
