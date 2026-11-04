const request = (obj) => {
  return new Promise((resolve, reject) => {
    const xhr /*xmlHttpRequest*/ = new XMLHttpRequest();
    xhr.open(obj.method, obj.url, true);
    xhr.send(null); // POST

    xhr.addEventListener("load", () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.responseText);
      } else {
        reject(xhr.statusText);
      }
    });
  });
};

// Maneira com callback
// const request = (obj) => {
//   const xhr /*xmlHttpRequest*/ = new XMLHttpRequest();
//   xhr.open(obj.method, obj.url, true);
//   xhr.send(null); // POST

//   xhr.addEventListener("load", () => {
//     if (xhr.status >= 200 && xhr.status < 300) {
//       obj.success(xhr.responseText);
//     } else {
//       obj.error(xhr.statusText);
//     }
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
  const href = el.getAttribute("href");

  const objConfig = {
    method: "GET",
    url: href,
  };
  //   // config para callback
  //   const objConfig = {
  //     method: "GET",
  //     url: href,
  //     success(response) {
  //       carregaResultado(response);
  //     },
  //     error(errorText) {
  //       console.log(errorText);
  //     },
  //   };
  //   request(objConfig)
  try {
    const response = await request(objConfig);
    carregaResultado(response);
  } catch (e) {
    console.log("Erro: ", e);
  }
}

// function carregaPagina(el) {
//   const href = el.getAttribute("href");

//   const objConfig = {
//     method: "GET",
//     url: href,
//   };
//   //   // config para callback
//   //   const objConfig = {
//   //     method: "GET",
//   //     url: href,
//   //     success(response) {
//   //       carregaResultado(response);
//   //     },
//   //     error(errorText) {
//   //       console.log(errorText);
//   //     },
//   //   };
//   //   request(objConfig)

//   request(objConfig)
//     .then((response) => {
//       carregaResultado(response);
//     })
//     .catch((error) => console.log(error));
// }

function carregaResultado(response) {
  const resultado = document.querySelector(".resultado");
  resultado.innerHTML = response;
}
