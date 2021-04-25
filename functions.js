//1
const texto = (text) => {
    return text
}
//2
const suma = (A, B) => {
return A + B;
}
//3
const resta = (C, D) => {
return C - D;
}
//4
const multiplicacion = (factorA, factorB) => {
return factorA * factorB;
}
//5
const division = (D1, D2) => {
    if  ( D2 === 0)  {
        return 'you cannot divide by zero';
    } else  {
        return D1 / D2;
    }
}
//6
const tablaMultiplicar = (mult, multiplicator) => {
    if (multiplicator === undefined) multiplicator = 10;
    let table = []
    for (let i = 0; i <= multiplicator; i++){
        table.push(mult * i)
}
return table
}

// //7
// const potencia = (base, exponente) => {
// return Math.pow(base, exponente)
// }
// //8
// const anidada = (a,b) => {
// function cuadrado(x) {
//     return x * x;
// }
// return cuadrado(a) + cuadrado(b);
// }
// //9
// const cerosIzq = (num, totalLength) => {
// var numStr = num.toString();
// var numCeros = totalLength - numStr.length;
// for (var i = 1; i <= numCeros; i++) {
//     numStr = "0" + numStr;
// }
// return numStr;
// }

export {
    texto,
    suma,
    resta,
    multiplicacion,
    division,
    tablaMultiplicar,
}