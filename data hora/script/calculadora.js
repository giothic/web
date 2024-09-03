let operacao = '';

function setOperacao(op) {
    operacao = op;
}

function calcular() {
    let num1 = parseFloat(document.getElementById(num1).value);
    let num2 = parseFloat(document.getElementById(num2).value);

    switch (operacao) {

        case '+':
            resultado = num1 + num2;
            break;
        case '-':
            resultado = num1 - num2;
            break;
        case '*':
            resultado = num1 * num2;
            break;
        case '/':
            if (num2 !== 0) {
                resultado = num1 / num2;
            } else {
                resultado = 'Não é possível dividir por 0!'
            }
            break;
        default:
            resultado = 'Operação Inválida.'
    }

    document.getElementById('demo').innerHTML = "Resultado =" + resultado;
}