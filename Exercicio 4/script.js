function calcularC() {
    const valorA = parseFloat(document.getElementById("valorA").value);
    const valorB = parseFloat(document.getElementById("valorB").value);

    const fatorACE = 2 / (valorA * valorB)
    const c = fatorACE / 2 * 3 * (valorA + valorB)

    const resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = `O valor de C é: ${c.toFixed(1)}`;
}