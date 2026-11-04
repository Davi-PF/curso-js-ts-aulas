// Mais sobre Fetch API (Agora com um arquivo JSON)

// fetch("pessoas.json")
//   .then((resposta) => resposta.json()) // retorna uma promise
//   .then((json) => carregaElementosNaPagina(json));

axios("pessoas.json").then((resposta) =>
  carregaElementosNaPagina(resposta.data),
);

function carregaElementosNaPagina(json) {
  const table = document.createElement("table");
  for (let pessoa of json) {
    const tr = document.createElement("tr");
    let td = document.createElement("td");
    td.innerHTML = pessoa.nome;
    tr.appendChild(td);

    td = document.createElement("td");
    td.innerHTML = pessoa.idade;
    tr.appendChild(td);

    table.appendChild(tr);
  }

  const resultado = document.querySelector(".resultado");
  resultado.appendChild(table);
}
