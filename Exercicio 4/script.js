function calcularC(a, b) {
    if (a <= 0) {
        alert("Error: Valor de A deve ser positivo.");
        return;
    }
    else if (b <= 0) {
        alert("Error: Valor de B deve ser positivo.");
        return;
    }
    else {
        const fatorACE = (a * b) / 2;
        const c = 2 * (3 * (a + b)) / fatorACE;
        return c;
    }
}

function handleCalculation() {
    const valorA = parseFloat(document.getElementById("valorA").value);
    const valorB = parseFloat(document.getElementById("valorB").value);

    const resultadoDiv = document.getElementById("resultado");

    const result = calcularC(valorA, valorB);

    if (typeof result === "string") {
        resultadoDiv.textContent = result;
    } else if (result == undefined) {
        resultadoDiv.textContent = "";
    } else {
        resultadoDiv.textContent = `O valor de C é: ${result}`;
    }
}

// Event listener for the button click
const calculateButton = document.querySelector("button[onclick='calcularC()']");
calculateButton.addEventListener("click", handleCalculation);

function limparCampos() {
    document.getElementById("valorA").value = "";
    document.getElementById("valorB").value = "";
    document.getElementById("resultado").textContent = "";
}

const clearButton = document.querySelector("button[onclick='limparCampos()']");
clearButton.addEventListener("click", limparCampos);
