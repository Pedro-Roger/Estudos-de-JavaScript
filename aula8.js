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
];


lista.sort ((a,b) => {
    if(a.nome.toUpperCase() < b.nome.toUpperCase()) {
        return -1;
}
    if(a.nome.toUpperCase() > b.nome.toUpperCase()) {
        return 1;
    }
    return 0
})

console.log (lista)