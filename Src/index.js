const args = process.argv.slice(2) // Accesa a los parametros que se captura.
// Omite el nombre "worksoace" "NodeJs-Curso"

let min = 1
let max = 100

if (args.length >= 2)
{
  const parseMin = parseInt(args[0],10)
  const parseMax = parseInt(args[1],10)
  
  if (!isNaN(parseMin) && (!isNaN(parseMax)) && (parseMin > parseMax) && (parseInt[0] = "") && (parseInt[1] = ""))
  {
    min = parseMin
    max = parseMax        
  }
  else
  {
    console.log ("Rango Invalido, usando valores por defecto del 1 al 100 ")
  }

} // if 

const randonNumber = Math.floor(Math.random()* (max - min + 1)) + min

console.log (`Numero generado entre Min ${min} y Max ${max}, numero generado : ${randonNumber}`)
// Convertir el valor de tipo cadena a Entero utilizando la funcion "parseInt"
