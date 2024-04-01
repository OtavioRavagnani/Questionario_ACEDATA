const numeroInput = document.getElementById("numero");
const gerarBtn = document.getElementById("gerar");
const resultadoDiv = document.getElementById("resultado");

gerarBtn.addEventListener("click", function () {
  const n = numeroInput.value;

  // Validação de pontos e vírgulas
  if (n.includes(".") || n.includes(",")) {
    alert("Erro: O número não pode conter pontos ou vírgulas.");
    return;
  }

  // Validação de campo vazio
  if (n == 0) {
    alert("Erro: Preencha o campo corretamente !");
    return;
  }

  // Cálculo da sequência de Fibonacci
  const fibonacci = (n) => {
    if (n === 0 || n === 1) {
      return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
  };

  // Exibir os N primeiros números da sequência
  let resultado = "Os " + n + " primeiros números da sequência de Fibonacci são:<br>";
  for (let i = 0; i < n; i++) {
    resultado += fibonacci(i) + "<br>";
  }

  // Verificar se N faz parte da sequência
  let encontrado = false;
  for (let i = 0; i < n; i++) {
    if (fibonacci(i) === n) {
      encontrado = true;
      break;
    }
  }

  // Exibir a mensagem final
  resultado += "<br>";
  if (encontrado) {
    resultado += "O número " + n + " faz parte da sequência de Fibonacci.";
  } else {
    resultado += "O número " + n + " não faz parte da sequência de Fibonacci.";
  }

  resultadoDiv.innerHTML = resultado;
});
