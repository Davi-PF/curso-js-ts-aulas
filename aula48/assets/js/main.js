const inputTarefa = document.querySelector(".input-tarefa");
const listaTarefas = document.querySelector(".lista-tarefas");
const btnAdicionar = document.querySelector(".btn-adicionar");

let vetorTarefas = [];

// Função para limpar o input e dar foco nele
function limpaInput() {
  inputTarefa.value = "";
  inputTarefa.focus();
}

// Cria o HTML de cada item da lista
function formatInput(id, value) {
  return `<li id="${id}" class="task-item">${value} <button id="${id}" class="btn-deletar">Apagar</button></li>`;
}

// Renderiza todas as tarefas na tela
function renderizarTarefas() {
  listaTarefas.innerHTML = "";
  for (let i in vetorTarefas) {
    listaTarefas.innerHTML += formatInput(i, vetorTarefas[i]);
  }
}

// Salva as tarefas no localStorage
function salvarTarefas() {
  const tarefasJSON = JSON.stringify(vetorTarefas);
  localStorage.setItem("tarefas", tarefasJSON);
}

// Adiciona uma nova tarefa à lista
function addToList(listValue) {
  vetorTarefas.push(listValue);
  renderizarTarefas();
  limpaInput();
  salvarTarefas();
}

// Remove a tarefa pelo ID/índice
function removeFromList(id) {
  vetorTarefas.splice(id, 1);
  renderizarTarefas();
  salvarTarefas();
}

// Eventos de clique para adicionar
btnAdicionar.addEventListener("click", () => {
  const tarefaTexto = inputTarefa.value.trim();
  if (!tarefaTexto) return;
  addToList(tarefaTexto);
});

// Evento de tecla Enter para adicionar
inputTarefa.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    const tarefaTexto = inputTarefa.value.trim();
    if (!tarefaTexto) return;
    addToList(tarefaTexto);
  }
});

// Evento de clique para deletar (delegação de evento na lista)
listaTarefas.addEventListener("click", (e) => {
  const el = e.target;
  if (el.classList.contains("btn-deletar")) {
    const id = Number(el.id);
    removeFromList(id);
  }
});

// Carrega as tarefas salvas ao iniciar a página
function carregarTarefas() {
  const tarefasSalvas = localStorage.getItem("tarefas");
  if (tarefasSalvas) {
    vetorTarefas = JSON.parse(tarefasSalvas);
    renderizarTarefas();
  }
}

carregarTarefas();
