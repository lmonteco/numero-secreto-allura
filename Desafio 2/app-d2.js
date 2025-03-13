// Tarefa 1
function consoleOlaMundo() {
    console.log('Olá Mundo!');
}

consoleOlaMundo();

// Tarefa 2
function consoleOlaMundoParametro(nome) {
    console.log(`Olá, ${nome}`);
}

consoleOlaMundoParametro('Lucas');

// Tarefa 3
function dobrarNumero(meuNumero) {
    return meuNumero * 2;
}

console.log(dobrarNumero(3));

// Tarefa 4
function tirarMedia(meuNumero1,meuNumero2,meuNumero3) {
    return (meuNumero1 + meuNumero2 + meuNumero3)/3;
}

console.log(tirarMedia(1,2,3));

// Tarefa 5
function compararMaior(meuNumeroMaior1,meuNumeroMaior2) {
    return Math.max(meuNumeroMaior1,meuNumeroMaior2);
}

console.log(compararMaior(32,12));

// Tarefa 6
function numeroMultiplicar(numeroMultiplicado) {
    return numeroMultiplicado * numeroMultiplicado;
}

console.log(numeroMultiplicar(70));