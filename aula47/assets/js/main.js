const iniciar = document.querySelector(".start");
const parar = document.querySelector(".stop");
const zerar = document.querySelector(".clear");
const contador = document.querySelector(".timer");
let timer;

let controle = true;

let tempo = 0;
let hora, min;

function iniciarTimer() {
  timer = setInterval(() => {
    tempo++;
    contador.innerHTML = exibirTempo(tempo);
  }, 1000);
}

iniciar.addEventListener("click", () => {
  clearInterval(timer);
  iniciarTimer();
  contador.style.color = "#000";
});

parar.addEventListener("click", () => {
  contador.style.color = "#ff8080";
  clearInterval(timer);
});

zerar.addEventListener("click", () => {
  contador.style.color = "#000";
  contador.innerHTML = "00:00:00";
  tempo = 0;
});

function exibirTempo(sec) {
  hora = sec / 60 / 60;
  min = sec / 60;
  sec = sec % 60;

  return formatarTempo(Math.floor(hora), Math.floor(min), Math.floor(sec));
}

function formatarTempo(hora, min, sec) {
  if (hora < 10) {
    hora = `0${hora}`;
  }
  if (min < 10) {
    min = `0${min}`;
  }
  if (sec < 10) {
    sec = `0${sec}`;
  }

  return `${hora}:${min}:${sec}`;
}
