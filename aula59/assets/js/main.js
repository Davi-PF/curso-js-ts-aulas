function Calculadora() {
  this.display = document.querySelector(".display");

  this.inicia = () => {
    this.capturaCliques();
    this.capturaEnter();
  };

  this.capturaEnter = () => {
    document.addEventListener("keyup", (e) => {
      if (e.keyCode === 13) {
        this.realizaConta();
      }
    });
  };

  this.capturaCliques = () => {
    document.addEventListener("click", (event) => {
      const el = event.target;
      if (el.classList.contains("btn-num")) this.addNumDisplay(el);
      if (el.classList.contains("btn-clear")) this.clear();
      if (el.classList.contains("btn-del")) this.del(el);
      if (el.classList.contains("btn-eq")) this.realizaConta(el);
    });
  };

  this.realizaConta = () => {
    try {
      const conta = eval(this.display.value);
      if (!conta) {
        alert("Conta inválida");
        return;
      }
      this.display.value = conta;
    } catch (e) {
      alert("Conta inválida");
      return;
    }
  };
  this.addNumDisplay = (el) => {
    this.display.value += el.innerText;
    this.display.focus();
  };

  this.clear = () => (this.display.value = "");
  this.del = () => (this.display.value = this.display.value.slice(0, -1));
}

const calculadora = new Calculadora();
calculadora.inicia();

// Meu jeito abaixo V
// // Constructor Function - Criar calculadora como objeto
// // [mas não faz sentido, porque a calculadora é somente 1 objeto em específico]

// function Calculadora(display) {
//   this.inicia = function () {
//     this.cliqueBotoes();
//     this.pressionaEnter();
//   };

//   this.pressionaEnter = function () {
//     display.addEventListener("keyup", (e) => {
//       if (e.keyCode === 13) {
//         this.realizaConta();
//       }
//     });
//   };

//   this.realizaConta = function () {
//     let conta = display.value;

//     try {
//       conta = eval(conta);
//       if (!conta) {
//         alert("Conta Inválida");
//       }

//       display.value = String(conta);
//     } catch (e) {
//       alert("Conta inválida");
//       return;
//     }
//   };

//   this.clearDisplay = function () {
//     display.value = "";
//   };

//   this.apagaUm = function () {
//     display.value = display.value.slice(0, -1);
//   };

//   // com arrow function (não permite alteração do THIS)
//   this.cliqueBotoes = function () {
//     //this é a calculadora
//     document.addEventListener("click", (e) => {
//       const el = e.target;

//       if (el.classList.contains("btn-num")) {
//         this.btnParaDisplay(el.innerText);
//       }

//       if (el.classList.contains("btn-clear")) {
//         this.clearDisplay();
//       }

//       if (el.classList.contains("btn-del")) {
//         this.apagaUm();
//       }

//       if (el.classList.contains("btn-eq")) {
//         this.realizaConta();
//       }
//     });
//   };

//   this.btnParaDisplay = function (valor) {
//     display.value += valor;
//   };
// }
// const display = document.querySelector(".display");
// const calculadora = new Calculadora(display);

// calculadora.inicia();
