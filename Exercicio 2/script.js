function encontrar() {
    const quantidade = parseInt(document.getElementById("quantidade").value);

    const sequencia = document.getElementById("sequencia").value;
    const numeros = sequencia.split(" ").map(Number);

    if (numeros.length !== quantidade) {
        alert("Erro: A quantidade de números digitados não corresponde à quantidade informada.");
        return;
    }

    for (let i = 0; i < quantidade; i++) {
        if (isNaN(numeros[i])) {
            alert("Erro: O valor \"" + numeros[i] + "\" não é um número válido.");
            return;
        }
    }

    let menor = numeros[0];
    let maior = numeros[0];
    for (let i = 1; i < quantidade; i++) {
        if (numeros[i] < menor) {
            menor = numeros[i];
        } else if (numeros[i] > maior) {
            maior = numeros[i];
        }
    }

    let resultado = "Sequência digitada: ";
    for (let i = 0; i < quantidade; i++) {
        resultado += numeros[i] + " ";
    }

    resultado += "<br>Menor número: " + menor;
    resultado += "<br>Maior número: " + maior;

    document.getElementById("resultado").innerHTML = resultado;
}

function limpar() {
    document.getElementById("quantidade").value = "";
    document.getElementById("sequencia").value = "";
    document.getElementById("resultado").innerHTML = "";
}
