// Uma função pode receber parametros ou nao.
// e pode retornar algo ou nao.
function calculadora(num1, num2){
    bemVindo();
    
    soma(num1, num2);

    multiplicacao(num1, num2);
}

function soma(num1, num2){
    const resultado = num1 + num2;
    return console.log(`A soma é : ${resultado}`) ;
}

function multiplicacao(num1, num2){
    const resultado = num1 * num2;
    return console.log(`A multiplicacao é : ${resultado}`);
}

function bemVindo(){
    console.log('Bem vindo a nossa calculadora!!!!')
    console.log('Eu vou somar e multiplicar seus numeros!!!')
}

calculadora(4,2);