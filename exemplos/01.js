// 1- Variáveis: let, const, var

console.log("Olá mundo!");

let contador = 0;
contador = contador + 2;

console.log(contador);


const PI = 3.1415

console.log(PI)

var nome = "João";
console.log(`Olá ${nome}`)


// 2. Estruturas de Controle

let clima = "sol";

if (clima === "chuvoso") {
    console.log("fique em casa")

} else if (clima === "sol") {
    console.log("vá a praia")
} else {
    console.log("vá ao parque")
}



let diaSemana =2;

switch (diaSemana) {
    case 1:
        console.log("segunda-feira")
        break;
    case 2:
        console.log("terça-feira")
        break;
    default: console.log("dia inválido");
}


// 3. Loops: for vs while

for (let i = 0; i<5; i++) {
    console.log(i)
}

// Quando usar: Quando você sabe quantas iterações serão necessárias (ex: percorrer arrays).


let senhaCorreta = true;

while(!senhaCorreta) {
    senhaCorreta = validarSenha();
    console.log(senhaCorreta)
}


// 4. Funções: Declaração vs Arrow Function


function validarSenha() {
    return true;

}


function somar (a,b) {
    return a+b;
}

console.log(somar(5,5))

// Quando usar: Quando precisa de acesso ao this dinâmico (ex: métodos de objeto).


const multiplicar = (a,b) => a*b ;

console.log(multiplicar(5,5))

// Quando usar: Para funções concisas ou quando quer preservar o this do contexto exterior (ex: callbacks).


// 5. Arrays: map, filter, reduce

const numeros = [1,2,3,4,5,6,7,8,9,10];

const dobrados = numeros.map(num => num *2);

console.log(dobrados);

// Quando usar: Converter dados (ex: formatar preços).


const maioresQue5 = numeros.filter(num => num >5);

console.log(maioresQue5);

// Quando usar: Filtrar listas (ex: produtos com estoque positivo).



const total = numeros.reduce((acc, num) => acc + num , 0);

console.log(total);

// Quando usar: Calcular totais, médias ou consolidar dados.



// 6. Objetos vs Classes


const pessoa = {
    nome: "Ana",
    idade: 30,
    endereco: {
        rua: "Rua A",
        numero: 123
    }
  };

//   Quando usar: Para estruturas de dados únicas ou simples.


class Carro {
    constructor(marca) {
        this.marca = marca
    }
    acelerar() {
        console.log("Vrumm!")
    }
}

const carro = new Carro("Ferrari");

console.log (carro.marca)
// Quando usar: Quando precisa de múltiplas instâncias com comportamentos compartilhados (ex: usuários, produtos).


// 7. Assincronicidade: Callbacks vs Promises vs Async/Await

function buscarDados (callback) {
    setTimeout (()=>callback("Dados recebidos"), 1000);
}

buscarDados(dados => console.log(dados));

// Quando evitar: Pode levar a "callback hell". Use apenas em APIs legadas.


function buscarDados () {
    return new Promise((resolve) => {
        setTimeout (() => resolve("Dados recebidos"), 5000);
    })
}

buscarDados().then(dados => console.log(dados))


// Quando usar: Para operações assíncronas encadeáveis (ex: fetch, arquivos).


async function carregarDados () {
    const dados = await buscarDados();
    console.log(dados);
}


// Quando usar: Para código assíncrono legível e linear (ex: chamadas API em sequência).


// 8. Destructuring vs Spread Operator


const [primeiro, segundo, terceiro] = [1,2,3];

const {nome, idade} = pessoa


// Quando usar: Para simplificar acesso a propriedades de objetos ou arrays.


const lista =[1,2,3];
const copia = [...lista];
const novoArray = [...lista, 4, 5];

// Quando usar: Clonar arrays/objetos ou combinar dados.

// 9. localStorage vs sessionStorage

localStorage.setItem("usuario", JSON.stringify({nome: "Ana", idade: 30}));
const usuario = JSON.parse(localStorage.getItem("usuario"));

// Quando usar: Salvar preferências do usuário que persistem após fechar o navegador.

sessionStorage.setItem("token", "1234");

// Quando usar: Dados temporários (ex: token de autenticação durante uma sessão).



// 10. Design Patterns: Factory vs Observer

//Factory (criar objetos):
function criarUsuario (nome, idade) {
    return { nome, idade, tipo: "usuário"}

}

const usuario = criarUsuario("maria", 30);


//Quando usar: Quando a criação de objetos é complexa ou requer lógica.

//Observer (eventos):

class Notificador {
    constructor() {
        this.ouvintes=[];
    }
    adicionarOuvinte(ouvinte) {
        this.ouvintes.push(ouvinte);
    }
    notificar ()
    {
        this.ouvintesforEach(ouvinte => ouvinte())
    }
    removerOuvinte(ouvinte) {
        this.ouvintes = this.ouvintes.filter(ouvinteExistente => ouvinteExistente !== ouvinte);
    }

}

//Quando usar: Para sistemas de eventos (ex: atualizações em tempo real).