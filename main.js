
// Llamando el modulo, usando el tipo de llamado CommonJS
const Operadores = require("./Src/Math.js")
const Es_numero = require("isnumber")



// Llamando a las funciones:
console.log(`La suma = ${Operadores.add(5,9)}; la resta = ${Operadores.subtract(50,100)}`)
console.log (`Es numero : -Cadena- ${Es_numero("Cadena")}`)




