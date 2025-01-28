function verificar(mensagem) {
    let numero;
    do {
      numero = parseFloat(prompt(mensagem));
    } while (isNaN(numero));
  
    return numero
  }
  
  const numero1 = verificar("digite o numero");
  const verificarParImpar = () => {
      if (numero1 % 2 === 0) {
          return "Par"
      } else {
          return "Impar"
      }
  }
  
  
  console.log(verificarParImpar(numero1))