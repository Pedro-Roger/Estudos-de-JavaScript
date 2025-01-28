function fibonacci(n) {
    let sequencia = [0, 1];
  
    for (let i = 2; i < n; i++) {
      sequencia.push(sequencia[i - 1] + sequencia[i - 2]);
    }
  
    return sequencia;
  }
  
  const algunsNumerosFibonacci = fibonacci(25);
  console.log(algunsNumerosFibonacci.join(', '));
  