// Função para encontrar o menor e o maior número em uma sequência
function encontrar() {

    // Obtém a quantidade de números digitada pelo usuário
    const quantidade = parseInt(document.getElementById("quantidade").value);

    // Obtém a sequência de números digitada pelo usuário
    const sequencia = document.getElementById("sequencia").value;

    // Converte a sequência em um array de números
    const numeros = sequencia.split(" ").map(Number);

    // Valida se a quantidade de números digitados corresponde à quantidade informada
    if (numeros.length !== quantidade) {
        alert("Erro: A quantidade de números digitados não corresponde à quantidade informada.");
        return;
    }

    // Valida se o campo "quantidade" não contém pontos ou vírgulas
    if (validar(document.getElementById("quantidade").value)) {
        alert("Erro: A quantidade não pode conter pontos ou vírgulas.");
        return;
    }

    // Valida se o campo "sequencia" não contém pontos ou vírgulas
    if (validar(document.getElementById("sequencia").value)) {
        alert("Erro: A sequência não pode conter pontos ou vírgulas.");
        return;
    }

    // Declara variáveis para armazenar o menor e o maior número
    let menor = numeros[0];
    let maior = numeros[0];
    let segundoMaior = numeros[0];

    // Percorre o array de números
    for (let i = 1; i < quantidade; i++) {

        // Se o número atual for menor que o menor número armazenado, atualiza o menor número
        if (numeros[i] < menor) {
            menor = numeros[i];
        }

        // Se o número atual for maior que o maior número armazenado, atualiza o maior número
        else if (numeros[i] > maior) {
            segundoMaior = maior;
            maior = numeros[i];
        }

        // Se o número atual for maior que o segundo maior número, mas menor que o maior número, atualiza o segundo maior número
        else if (numeros[i] > segundoMaior) {
            segundoMaior = numeros[i];
        }
    }

    // Cria uma string com a sequência digitada
    let resultado = "Sequência digitada: ";
    for (let i = 0; i < quantidade; i++) {
        resultado += numeros[i] + " ";
    }

    // Adiciona o menor e o maior número à string
    resultado += "<br>Menor número: " + menor;
    resultado += "<br>Maior número: " + maior;
    resultado += "<br>Segundo maior número: " + segundoMaior;

    // Exibe a string com os resultados na página
    document.getElementById("resultado").innerHTML = resultado;
}

// Função para limpar os campos do formulário
function limpar() {
    document.getElementById("quantidade").value = "";
    document.getElementById("sequencia").value = "";
    document.getElementById("resultado").innerHTML = "";
}

// Função para validar se um valor contém pontos ou vírgulas
function validar(valor) {

    // Expressão regular que encontra pontos e vírgulas
    const regex = /[.,]/g;

    // Retorna `true` se encontrar ponto ou vírgula, `false` se não encontrar
    return regex.test(valor);
}
