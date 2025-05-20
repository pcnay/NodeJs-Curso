function add (a,b)
{
  return (a+b)
}

function subtract (a,b)
{
  return (a - b)
}

// Exportar las funciones, para que otros modulos puedan utilizarlo.
module.exports = {
  add,
  subtract
};
