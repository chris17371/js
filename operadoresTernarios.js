const autenticado = false;
const puedePagar = false;

console.log(autenticado ? "Usuario autenticado" : "Usuario no autenticado");

console.log(autenticado && puedePagar ? "Usuario autenticado y puede pagar" : "Usuario no autenticado o no puede pagar");

console.log(puedePagar ? "Usuario puede pagar" : "Usuario no puede pagar");

console.log(autenticado ? puedePagar ? "Si puede pagar" : "Esta autenticado pero no puede pagar" : "No esta autenticado");