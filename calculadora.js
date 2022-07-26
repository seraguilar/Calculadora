let somar = require('./somar')
let subtrair = require('./subtrair')
let multiplicar = require('./multiplicar')
let dividir = require('./dividir')

function calcular(A, B, callback) {
    return callback(A,B)
}

console.log(calcular(8, 5, somar))