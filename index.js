exports.Soma = function(numero1, numero2){
    return numero1 + numero2;
}

exports.Subtracao = function(numero1, numero2) {
    return numero1 - numero2;
}

exports.Multiplicacao = function(numero1, numero2) {
    return numero1 * numero2;
}

exports.Divisao = function(numero1, numero2) {
    return numero1 * numero2;
}

exports.NumeroPar = function(numero) {
    var resposta = false;
    if(numero % 2 == 0){
        resposta = true;
        return resposta;
    } else {
        return resposta;
    }
}

exports.NumeroImpar = function(numero) {
    var resposta = true;
    if(numero % 2 == 0){
        resposta = false;
        return resposta;
    } else {
        return resposta;
    }
}
