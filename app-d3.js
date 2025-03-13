let titulo = document.querySelector(`h1`);
let paginaLabel = document.querySelector(`title`)
titulo.innerHTML = 'Hora do Desafio';
paginaLabel.innerHTML = 'Desafio JS'

function exibirMensagemConsole() {
    console.log('O botão foi clicado');
}

function exibirMensagemAlerta() {
    console.log('Eu amo JS');
}

function exibirPrompt() {
    let nomeDaCidade = prompt(`Digite o nome de uma cidade do Brasil:`)
    alert(`Estive em ${nomeDaCidade} e lembrei de você!`);
}

function calcularSoma() {
    numero1 = parseInt(prompt(`Insira um número inteiro:`));
    numero2 = parseInt(prompt(`Insira outro número inteiro:`));
    let soma = numero1 + numero2;
    alert(`${numero1} + ${numero2} = ${soma}`);
}