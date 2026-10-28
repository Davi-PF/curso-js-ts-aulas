// Factory Function (Função fábrica)
// Constructor function (Função construtura)
function criaPessoa(nome, sobrenome, a, p) {
  return {
    nome,
    sobrenome,

    // Getter
    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    },
    // Setter
    set nomeCompleto(valor) {
      valor = valor.split(" ");
      this.nome = valor.shift();
      this.sobrenome = valor.join(" ");
    },
    fala(assunto = "falando sobre nada") {
      return `${this.nome} está ${assunto}`;
    },
    altura: a,
    peso: p,
    get imc() {
      const indice = this.peso / this.altura ** 2;
      return indice.toFixed(2);
    },
  };
}

const p1 = criaPessoa("Davi", "Ferreira", 1.88, 65);
p1.nomeCompleto = "Maria Oliveira Silva";
console.log(p1.nomeCompleto);
console.log(p1.nome);
console.log(p1.sobrenome);
console.log(p1.fala());
