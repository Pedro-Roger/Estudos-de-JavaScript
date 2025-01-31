const lista = [
    {
        id: 1,
        nome: 'João',
        idade: 20,
        cartoes: ['4455', '5566']
    },
    {
        id: 2,
        nome: 'Maria',
        idade: 25,
        cartoes: ['4457', '5586']
    },
    {
        id: 3,
        nome: 'Pedro',
        idade: 30,
        cartoes: ['4458', '5587']
    },
    {
        id: 4,
        nome: 'Ana',
        idade: 35,
        cartoes: ['4459', '5588']
    },
    {
        id: 5,
        nome: 'José',
        idade: 40,
        cartoes: ['4460', '5589']
    }
]


const cartoes = lista.flatMap((cartao) => cartao.cartoes)

console.log(cartoes)