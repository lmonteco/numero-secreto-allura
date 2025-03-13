// Tarefa 1
// IMC = peso / (altura x altura) - Altura em Metros e Peso em Kilogramas
function calcularImc(altura,peso) {
    return indiceMassaCorporal = (peso / Math.pow(altura, 2)).toFixed(2);
}

console.log(`IMC ${calcularImc(1.68,94)}`);

// Tarefa 2
function calcularFatorial(numero) {
    if (numero == 0 || numero == 1) {
        return numero;
    }
    fatorInicial = numero;
    resultadoFinal = 1
    while(fatorInicial > 0) {
        resultadoFinal *= fatorInicial;
        fatorInicial--;
    }
    console.log(`O Fatorial de ${numero} é igual a ${resultadoFinal}`);
}

calcularFatorial(5);

// Tarefa 3
function converterDolar (dolar) {
    let cotacaoDolar = 4.85;
    let conversao = (dolar * cotacaoDolar).toFixed(2);
    console.log(`R$${conversao}`);
}

converterDolar(30);

// Tarefa 4
function exibirAreaEPerimetro(altura,largura) {
    let area = altura * largura
    let perimetro = Math.pow(altura,2) + Math.pow(largura,2);
    console.log(`O perímetro da sala é de ${perimetro} metros`);
    console.log(`A área da sala é de ${area} metros quadrados`);
}

exibirAreaEPerimetro(30,20);

// Tarefa 5
function exibirAreaCirculo(raio) {
    pi = 3.14;
    areaCirculo = raio * pi;
    console.log(`A área da sala circular é de ${areaCirculo}`);
}

exibirAreaCirculo(20);

// Tarefa 6
function exibirTabuada(x) {
    n = 1
    while(n <= 10) {
        valorTabuada = n * x;
        console.log(`${x} x ${n} = ${valorTabuada}`);
        n++;
    }
}

exibirTabuada(2);