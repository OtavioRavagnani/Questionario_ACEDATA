function fibonacciModificado(n) {
  if (n <= 0) return [];
  const sequencia = [1, 1];
  for (let i = 2; i < n; i++) {
    const ultimo = sequencia[sequencia.length - 1];
    const penultimo = sequencia[sequencia.length - 2];
    const soma = ultimo % 2 === 0 ? ultimo + penultimo + sequencia[sequencia.length - 3] : ultimo + penultimo;
    sequencia.push(soma);
  }
  return sequencia;
}

function gerarSequencia() {
  const n = document.getElementById("numero").value;
  const numeroValido = !isNaN(n) && n > 0 && !n.includes(".") && !n.includes(",");

  if (!numeroValido) {
    alert("O valor digitado é inválido. Digite um número inteiro positivo.");
    return;
  }

  const sequencia = fibonacciModificado(n);
  document.getElementById("resultado").innerHTML = "";

  for (let i = 0; i < sequencia.length; i++) {
    const elemento = document.createElement("span");
    elemento.classList.add("numero");
    elemento.textContent = sequencia[i];
    document.getElementById("resultado").appendChild(elemento);
  }

  const numeroN = document.getElementById("numero").value;
  const estaNaSequencia = sequencia.includes(parseInt(numeroN));
  const mensagem = document.createElement("p");
  mensagem.textContent = estaNaSequencia ? `O número ${numeroN} está na sequência.` : `O número ${numeroN} não está na sequência.`;
  document.getElementById("resultado").appendChild(mensagem);
}

document.getElementById("gerar").addEventListener("click", gerarSequencia);
