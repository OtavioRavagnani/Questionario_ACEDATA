function calcularSalario() {
  const salarioHora = parseFloat(document.getElementById("salarioHora").value);
  const horasTrabalhadas = parseFloat(document.getElementById("horasTrabalhadas").value);
  const filhosMenores14 = parseInt(document.getElementById("filhosMenores14").value);

  if (salarioHora <= 0) {
    alert("Erro: Salário hora não pode ser zero ou negativo.");
    return;
  }

  if (horasTrabalhadas <= 0) {
    alert("Erro: Horas trabalhadas não podem ser zero ou negativas.");
    return;
  }

  if (filhosMenores14 <= 0) {
    alert("Erro: Número de filhos menores de 14 anos não pode ser negativo.");
    return;
  }

  const salarioBruto = salarioHora * horasTrabalhadas;

  let salarioFamilia = 0;
  if (salarioBruto <= 788.00) {
    salarioFamilia = filhosMenores14 * 30.50;
  } else if (salarioBruto > 788.00 && salarioBruto <= 1100.00) {
    salarioFamilia = filhosMenores14 * 18.50;
  } else {
    salarioFamilia = filhosMenores14 * 11.90;
  }

  const salarioLiquido = salarioBruto + salarioFamilia;

  document.getElementById("salarioBruto").innerHTML = `Salario Bruto: R$ ${salarioBruto.toFixed(2)}`;
  document.getElementById("salarioFamilia").innerHTML = `Salario Familia: R$ ${salarioFamilia.toFixed(2)}`;
  document.getElementById("salarioLiquido").innerHTML = `Salario Liquido: R$ ${salarioLiquido.toFixed(2)}`;
}
