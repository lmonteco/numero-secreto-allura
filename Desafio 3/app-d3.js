// IMC = peso / (altura x altura) - Altura em Metros e Peso em Kilogramas

function calcularImc(altura,peso) {
    return indiceMassaCorporal = peso / Math.pow(altura, 2);
}

console.log(calcularImc(1.68,94));