//Código de resposta da questão 1

let INDICE = 13, SOMA = 0, K = 0;

K < INDICE
{
K = K + 1;
SOMA = SOMA + K;
}

console.log('A resposta da questão 1 é: ' + SOMA);



//Código de resposta da questão 2
//O código foi desenvolvido com auxilio da documentação
function fibonacciSequence(n) {
    let fibonacci = [0, 1];

    for (let i = 2; i <= n; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }

    return fibonacci;
}

function checkFibonacciNumber() {
    var num = parseInt(document.getElementById("numero").value);
    var fibonacci = fibonacciSequence(1000);

    if (fibonacci.includes(num)) {
        document.getElementById("resultado").innerHTML = `${num} pertence à sequência de Fibonacci.`;
    } else {
        document.getElementById("resultado").innerHTML = `${num} não pertence à sequência de Fibonacci.`;
    }
}



//Código de resposta da questão 5
//Invertendo as Strings
function inverterString() {
    
    var texto = document.getElementById("string").value;

    var textoInvertido = texto.split('').reverse().join('');

    document.getElementById("invert").innerText = "String Invertida: " + textoInvertido;
}




