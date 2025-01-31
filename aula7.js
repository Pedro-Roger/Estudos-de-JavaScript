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

const funcaoReduce = (acc, objeto) => {
    return {
        ...acc,
        [objeto.nome]: {
            idade: objeto.idade
        }
    }
}


const pessoas = lista.reduce(funcaoReduce , {})

const chaves = Object.keys(pessoas)

// console.log(chaves)

// console.log(Object.keys(lista[0])) 


const listaDeVolta = chaves.map ((chave) => ({
    nome: chave, 
    idade : pessoas[chave].idade
}))



console.log(listaDeVolta)