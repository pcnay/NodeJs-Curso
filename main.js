
// Llamando el modulo, usando el tipo de llamado CommonJS
const Operadores = require("./Src/Math.js")
const Es_numero = require("isnumber")
// Usando CommonJS ya que como esta definido este "main.js" para uso de CommonJS 
const Archivos = require("./Src/Fs.js")


// Llamando a las funciones:
console.log(`La suma = ${Operadores.add(5,9)}; la resta = ${Operadores.subtract(50,100)}`)
console.log (`Es numero : -Cadena- ${Es_numero("Cadena")}`)
Archivos.Registros()

console.log ("El contenido del archivo ",Archivos.Leer_Reg())
console.log ("Actualizando el archivo ",Archivos.Actualizar_Reg())
console.log ("El contenido del archivo actualizado ",Archivos.Leer_Reg())
console.log ("Se borro el archivo ? ; ",Archivos.Borrar_archivo())






