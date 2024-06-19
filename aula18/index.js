// const array = [1,2,3];
// array.push(4);
// array[0] = 'Luiz'
// console.log(array)

// const nome01 = 'Luiz'
// const sobrenome01 = 'Miranda'
// const idade01 = '25'

// const nome02 = 'Maria'
// const sobrenome02 = 'Oliveira'
// const idade02 = '55'

// const pessoa1 = {
//     nome: 'Luiz',
//     sobrenome: 'Miranda',
//     idade: 25
// };

// console.log(pessoa1.nome);
// console.log(pessoa1.sobrenome);

// function criaPessoa (nome, sobrenome, idade) {
//     return {nome, sobrenome, idade
//     };
// }

// const pessoa1 = criaPessoa('Luiz', 'Otavio', 25);
// const pessoa2 = criaPessoa('Maria', 'lara', 25);
// const pessoa3 = criaPessoa('Jão', 'lucas', 25);
// const pessoa4 = criaPessoa('Junior', 'Otavio', 25);
// const pessoa5 = criaPessoa('Jean', 'Otavio', 25);

// console.log(pessoa1.sobrenome, pessoa2.nome);

const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,

    fala () {
        console.log(`A minha idade atual é ${this.idade}`)
    },
    
    incrementaIdade () {
        this.idade++;
    }
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
