const lista = [
    {
        id: 1,
        nome: 'João',
        idade: 20,
        exibir: true
    },
    {
        id: 2,
        nome: 'Maria',
        idade: 25,
    },
    {
        id: 3,
        nome: 'Pedro',
        idade: 30,
    },
    {
        id: 4,
        nome: 'Ana',
        idade: 35,
    },
    {
        id: 5,
        nome: 'José',
        idade: 40,
    }
]


const resultado = lista.some((objeto) => objeto.idade >= 40 );
const resultadoEvery = lista.every((objeto) => objeto.idade >= 20 );

console.log('resultadoSome',resultado)
console.log('resultadoEvery',resultadoEvery)