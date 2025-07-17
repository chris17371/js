
var total=0;
function agregarNota(corte,nota) {
    console.log(`la nota del ${corte} es ${nota}`);
    return total += nota;
    

    
}

function calcularPromedio(total) {
    return promedio=total/3;
    
}
total=agregarNota('corte1',15);
console.log(total);
total=agregarNota('corte2',20);
console.log(total);
total=agregarNota('corte3',12);
console.log(total);
const totalPromedio=calcularPromedio(total);
console.log(`el promedio es ${totalPromedio}`);
