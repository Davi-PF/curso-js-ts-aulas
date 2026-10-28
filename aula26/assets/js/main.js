function imcController() {
  const form = document.querySelector(".form");
  const resultado = document.querySelector(".resultado");

  function mostrarValor(cor, conta, classificacao) {
    resultado.innerHTML = `<div style="background-color: ${cor}";><p>Seu IMC é ${conta.toFixed(2)} (${classificacao})</p></div>`;
  }

  function validarValores(p, a) {
    if (isNaN(p)) {
      resultado.innerHTML = `<div style="background-color: red";><p>Peso inválido</p></div>`;
    } else if (isNaN(a)) {
      resultado.innerHTML = `<div style="background-color: red";><p>Altura inválida</p></div>`;
    } else {
        resultado.innerHTML = `<div style="background-color: red";><p>Altura e peso inválid</p></div>`;
    }
  }

  function calcularIMC(e) {
    e.preventDefault();

    let peso = Number(form.querySelector("#peso").value);
    let altura = Number(form.querySelector("#altura").value);

    validarValores(peso, altura);

    let conta = peso / altura ** 2;
    let classificacao = "";
    let cor;

    let imc = conta.toFixed(1);
    if (peso == NaN) {
      mostrarValor;
    }
    if (imc < 18.5) {
      classificacao = "Abaixo do Peso";
      cor = "#ff0000";
      mostrarValor(cor, conta, classificacao);
    } else if (imc >= 18.5 && imc <= 24.9) {
      classificacao = "Peso normal";
      cor = "#00ff00";
      mostrarValor(cor, conta, classificacao);
    } else if (imc >= 25 && imc <= 29.9) {
      classificacao = "Sobrepeso";
      cor = "orange";
      mostrarValor(cor, conta, classificacao);
    } else if (imc >= 30 && imc <= 34.9) {
      classificacao = "Obesidade grau 1";
      cor = "dark-orange";
      mostrarValor(cor, conta, classificacao);
    } else if (imc >= 35 && imc <= 39.9) {
      classificacao = "Obesidade grau 2";
      cor = "#ff0000";
      mostrarValor(cor, conta, classificacao);
    } else if (imc > 40) {
      classificacao = "Obesidade grau 3";
      cor = "#500000";
      mostrarValor(cor, conta, classificacao);
    }
  }
  form.addEventListener("submit", calcularIMC);
}

imcController();
