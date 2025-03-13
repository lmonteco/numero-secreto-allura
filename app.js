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

function consoleOlaMundo() {
    console.log('Olá Mundo!');
}

function consoleOlaMundoParametro(nome) {
    console.log(`Olá, ${nome}`);
}

function dobrarNumero(meuNumero) {
    return meuNumero * 2;
}

function tirarMedia(meuNumero1,meuNumero2,meuNumero3) {
    return (meuNumero1 + meuNumero2 + meuNumero3)/3;
}

function compararMaior(meuNumeroMaior1,meuNumeroMaior2) {
    return Math.max(meuNumeroMaior1,meuNumeroMaior2);
}

function numeroMultiplicar(numeroMultiplicado) {
    return numeroMultiplicado * numeroMultiplicado;
}

consoleOlaMundo();
consoleOlaMundoParametro('Lucas');
console.log(dobrarNumero(3));
console.log(tirarMedia(1,2,3));
console.log(compararMaior(32,12));
console.log(numeroMultiplicar(70));