const pessoa = {
    nome : "Pedro Roger",
    idade: 25,
    apresentar() {
        return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`;
    }

};

console.log(pessoa.apresentar());