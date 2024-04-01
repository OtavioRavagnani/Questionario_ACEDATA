function fibonacci(n) {
  // Caso base
  if (n === 0 || n === 1) {
    return 1;
  }

  // Soma dos dois números anteriores
  return fibonacci(n - 1) + fibonacci(n - 2);
}

function main() {
  // Leitura do valor N
  const n = parseInt(prompt("Digite um número N: "));

  // Impressão dos N primeiros números da sequência
  console.log("Os " + n + " primeiros números da sequência de Fibonacci são:");
  for (let i = 0; i < n; i++) {
    console.log(fibonacci(i));
  }

  // Verificação se N faz parte da sequência
  let encontrado = false;
  for (let i = 0; i < n; i++) {
    if (fibonacci(i) === n) {
      encontrado = true;
      break;
    }
  }

  // Exibição da mensagem final
  if (encontrado) {
    console.log("O número " + n + " faz parte da sequência de Fibonacci.");
  } else {
    console.log("O número " + n + " não faz parte da sequência de Fibonacci.");
  }
}

main();
