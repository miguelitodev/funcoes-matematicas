exports.calcularSoma = function(numero1, numero2){
    return numero1 + numero2;
}

exports.calcularSubtracao = function(numero1, numero2) {
    return numero1 - numero2;
}

exports.calcularMultiplicacao = function(numero1, numero2) {
    return numero1 * numero2;
}

exports.calcularDivisao = function(numero1, numero2) {
    return numero1 * numero2;
}

exports.calcularAreaQuadrado = function(lado1) {
    return lado1 * lado1;
}

exports.calcularAreaRetangulo = function(lado1, lado2) {
    return lado1 * lado2;
}

exports.calcularAreaParalelogramo = function(base, altura){
    return base * altura;
}

exports.calcularAreaTrianguloRetangulo = function(base, altura) {
    return (base * altura) / 2;
}

exports.calcularAreaTrianguloEquilatero = function(lado){
    return ((Math.sqrt(3) / 4) * (lado * lado));
}

exports.calcularAreaTrianguloIsosceles = function(base, altura){
    return (base * altura) / 2;
}

exports.calcularAreaTrianguloEscaleno = function(lado1, lado2, lado3){
    return (1/2 * lado2 * lado3 * Math.sin(lado1));
}

exports.calcularAreaLosango = function(diagonalMaior, diagonalMenor){
    return (diagonalMaior * diagonalMenor) / 2;
}

exports.calcularAreaTrapezio = function(baseMaior, baseMenor, altura){
    return ((baseMaior + baseMenor) * altura) / 2;
}

exports.calcularAreaCirculo = function(raio) {
    return (3.14159 * (raio * raio));
}

exports.verificarNumeroPar = function(numero) {
    var resposta = false;
    if(numero % 2 == 0){
        resposta = true;
        return resposta;
    } else {
        return resposta;
    }
}

exports.verificarNumeroImpar = function(numero) {
    var resposta = true;
    if(numero % 2 == 0){
        resposta = false;
        return resposta;
    } else {
        return resposta;
    }
}
