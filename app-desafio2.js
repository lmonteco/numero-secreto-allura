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