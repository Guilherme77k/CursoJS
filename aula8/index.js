// Luiz OtávioMiranda tem 30 anos, pesa 84 kg tem 1.8 de altura e seu IMC é de 25.925925925925924 Guilherme nasceu em 1980

const nome = 'Guilherme';
const sobrenome = 'Duarte';
const idade = 30;
const peso = 84;
const alturaEmM = 1.80;
let indiceMassaCorporal; // peso / (altura * altura)
let anoNascimento;

indiceMassaCorporal = peso / (alturaEmM * alturaEmM);
anoNascimento = 2010 - idade

console.log (`${nome} ${sobrenome} tem ${idade} anos pesa ${peso} kg`);
console.log (`tem ${alturaEmM} de altura e seu IMC é de ${indiceMassaCorporal}`);
console.log (`${nome} nasceu em ${anoNascimento}.`);