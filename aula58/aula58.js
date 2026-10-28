// Função construtora -> Objetos (Constrói)
// Funjção fábrica -> Objetos (Fabrica)
// Construtora -> sempre com primeira letra Maíuscula -> Pessoa (new)
function Pessoa(nome, sobrenome) {

    //  Atributos ou métodos Privados
    const id = 123456;
    const metodoInterno = function() {

    };
    // Atributos ou métodos públicos
  this.nome = nome;
  this.sobrenome = sobrenome;
  
  this.metodo = function(){
    console.log(this.nome + ': sou um método');
    
  }
}

const p1 = new Pessoa("Davi", "Ferreira");
const p2 = new Pessoa("Maria", "Oliveira");

p1.metodo();
p2.metodo();