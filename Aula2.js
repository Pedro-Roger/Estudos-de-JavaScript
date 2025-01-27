const lista = [
    {
        id: 1,
        nome: 'João',
        idade: 20,
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

// for(let i = 0; i< lista.length; i++){
//     console.log(lista[i])
// }
let soma=0

const somaIdade = (objeto) => {
    soma += objeto.idade
}

lista.forEach(somaIdade)

console.log(soma)