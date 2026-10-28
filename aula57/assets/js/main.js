// Factory Function - Criar calculadora como objeto
// [mas não faz sentido, porque a calculadora é somente 1 objeto em específico]

function criaCalculadora() {
  return {
    display: document.querySelector(".display"),

    inicia: function () {
      this.cliqueBotoes();
      this.pressionaEnter();
    },

    pressionaEnter() {
      this.display.addEventListener("keyup", (e) => {
        if (e.keyCode === 13) {
          this.realizaConta();
        }
      });
    },

    realizaConta() {
      let conta = this.display.value;

      try {
        conta = eval(conta);
        if (!conta) {
          alert("Conta Inválida");
        }

        this.display.value = String(conta);
      } catch (e) {
        alert("Conta inválida");
        return;
      }
    },

    clearDisplay() {
      this.display.value = "";
    },

    apagaUm() {
      this.display.value = this.display.value.slice(0, -1);
    },

    // com arrow function (não permite alteração do THIS)
    cliqueBotoes() {
      //this é a calculadora
      document.addEventListener("click", (e) => {
        const el = e.target;

        if (el.classList.contains("btn-num")) {
          this.btnParaDisplay(el.innerText);
        }

        if (el.classList.contains("btn-clear")) {
          this.clearDisplay();
        }

        if (el.classList.contains("btn-del")) {
          this.apagaUm();
        }

        if (el.classList.contains("btn-eq")) {
          this.realizaConta();
        }
      });
    },

    // com bind (pois do jeito que está, ele troca o this (calculadora) para document)
    // cliqueBotoes(){
    //     //this é a calculadora
    //     document.addEventListener('click', function(e){
    //         const el = e.target;

    //         if(el.classList.contains('btn-num')){
    //             this.btnParaDisplay(el.innerText);
    //         }
    //     }.bind(this));
    // },

    btnParaDisplay(valor) {
      this.display.value += valor;
    },
  };
}

const calculadora = criaCalculadora();

calculadora.inicia();
