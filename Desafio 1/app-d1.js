// Tarefa 1 - N/A
// Tarefa 2
let titulo = document.querySelector(`h1`);
titulo.innerHTML = 'Hora do Desafio';

// Tarefa 3
function exibirMensagemConsole() {
    console.log('O botão foi clicado');
}

// Tarefa 4
function exibirMensagemAlerta() {
    console.log('Eu amo JS');
}

// Tarefa 5
function exibirPrompt() {
    let nomeDaCidade = prompt(`Digite o nome de uma cidade do Brasil:`)
    alert(`Estive em ${nomeDaCidade} e lembrei de você!`);
}

// Tarefa 6
function calcularSoma() {
    numero1 = parseInt(prompt(`Insira um número inteiro:`));
    numero2 = parseInt(prompt(`Insira outro número inteiro:`));
    let soma = numero1 + numero2;
    alert(`${numero1} + ${numero2} = ${soma}`);
}


