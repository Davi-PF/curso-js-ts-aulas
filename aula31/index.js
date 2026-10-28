const verdadeira = true;

// // Não pode redeclarar LET
// Let tem escopo de bloco { ... bloco }
// Var só tem escopo de função

let nome = 'Luiz'; // Criando
var nome2 = 'Luiz';



if(verdadeira){
    let nome = 'Otavio'; // Criando outra variável 'nome'
    console.log(nome, nome2);

    if(verdadeira){
        let nome = 'Outra coisa';
        console.log('OK');
        console.log(nome, nome2);
    }
}