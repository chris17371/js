let total=0;
iniciaraApp();
function iniciaraApp() {
    console.log("Iniciando App...");
    segundaFuncion(5, 30);
}
function segundaFuncion(num1,num2) {
    console.log(`La suma de los números es: ${num1 + num2}`);
    return total= num1 +num2;

}
    multiplicacion(total);
function multiplicacion(total) {
    console.log(`la suma es: ${total} * 50 es igual a ${total * 50}`);
    
}