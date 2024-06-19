// Primitivos (imutaveis) - String, number, Boolean, undefined, null (bigint, symbol) - Valor

// let a = 'A';
// let b = a; //copía
// console.log(a, b);

// a = 'Outra coisa';
// console.log(a, b);


// referencia (mutavel) - Array, object, function

// let a = [1, 2, 3];
// let b = [...a];
// let c = b;

// console.log(a, b);

// a.push (4);
// console.log(a, b);

// b.pop ();
// console.log(a, b);

// a.push('Luiz')
// console.log(c);


const a = {
    nome: 'Luiz',
    sobrenome: 'Otavio'
};

const b = {...a};

a.nome = 'João';
console.log(a);
console.log(b);