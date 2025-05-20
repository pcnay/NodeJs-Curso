// Haciendo uso de modulos nativos de NodeJS
const sistema_archivo = require ("fs")
const fileName = "example.txt"

// Crear un archivo.
function Registros() 
{
  sistema_archivo.writeFileSync(fileName,"Lineas de ejemplo para el proyecto \n")
  console.log ("Archivo Creado Correctamente ... ")
}

// Para leer un archivo de texto
function Leer_Reg()
{
  const contenido = sistema_archivo.readFileSync(fileName,'utf8')  
  return contenido
}

// Actualizar datos
function Actualizar_Reg()
{
  const actualizar = sistema_archivo.appendFileSync(fileName,"Agregando una nueva linea al archivo \n")
  return actualizar
}

// Borrar el archivo
function Borrar_archivo()
{
  sistema_archivo.unlinkSync(fileName)
  return 'Borrado Correctamente'
}

module.exports = {
  Registros,
  Leer_Reg,
  Actualizar_Reg,
  Borrar_archivo
}