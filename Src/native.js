const fs = require("fs")

// Para poder leer el archivo un directorio arriba
const data = fs.readFileSync('../ejemplo.txt','utf8') 

console.log ("File content ",data)
