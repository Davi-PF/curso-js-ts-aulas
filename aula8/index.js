const nome = "Davi";
const sobrenome = "Ferreira";
const idade = "23";
const peso = "65";
const alturaEmM = 1.88;
let imc = peso / (alturaEmM * alturaEmM);
let anoNascimento = 2024 - idade;

// template strings

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${imc}`);
console.log(`${nome} nasceu em ${anoNascimento}.`);