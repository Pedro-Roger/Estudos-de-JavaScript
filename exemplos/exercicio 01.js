//Calcular a média de 3 números.

function calcularMedia(a,b,c) {
    return (a+b+c)/3
}

function pedirNumero(mensagem) {
    let numero ;
    do { 
        numero = parseFloat(prompt(mensagem));
    
    } while (isNaN(numero));

    return numero
}


const numero1 = pedirNumero("Digite o primeiro número:");
const numero2 = pedirNumero("Digite o segundo número:");
const numero3 = pedirNumero("Digite o terceiro número:");

const media = calcularMedia(numero1, numero2, numero3);

console.log(media)
