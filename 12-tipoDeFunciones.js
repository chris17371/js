'user strict';
// funciones de declaracion
function suma(a,b) {
    console.log(`la suma de ${a}+ ${b} es igual  a= ${a+b} `);
    
}
suma(5,10);

// funciones de expresion
const suma2 = function(c,d) {
    console.log(`la suma de ${c}+ ${d} es igual  a= ${c+d} `);
}
suma2(11,6);