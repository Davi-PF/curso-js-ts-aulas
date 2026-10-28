// function criaPessoa (nome, sobrenome, idade) {
//     return { nome, sobrenome, idade};
// }

// const pessoa1 = criaPessoa('Davi', 'Prudente', 24);
// const pessoa2 = criaPessoa('Maria', 'Silva', 30);
// const pessoa3 = criaPessoa('João', 'Santos', 35);
// const pessoa4 = criaPessoa('Ana', 'Oliveira', 28);
// const pessoa5 = criaPessoa('Carlos', 'Costa', 40);

// console.log(pessoa1.nome, pessoa2.nome);


const pessoa1 = {
    nome: 'Davi',
    sobrenome: 'Prudente',
    idade: 24,

    fala() {
        console.log(`${this.nome} ${this.sobrenome} está falando oi...`);
        console.log(`A minha idade atual é ${this.idade}`);
    },

    incrementaIdade() {
        this.idade++;
    }
}

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
