iniciaraApp();
function iniciaraApp() {
    console.log("Iniciando App...");
    segundaFuncion(10, 20);
}
function segundaFuncion(num1,num2) {
    console.log(`La suma de los números es: ${num1 + num2}`);
    multiplicacion(num1, num2);   
}
function multiplicacion(num1,num2) {
    console.log(`la suma es: ${num1 + num2} * 50 es igual a ${(num1 + num2) * 50}`);
    
}