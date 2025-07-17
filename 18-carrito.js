var total=0;
function agregarCarrito(precio) {
    return total += precio;
    
}

function calcularImpuesto(total) {
    return impuesto=total*1.16;
    
}
total=agregarCarrito(100);
total=agregarCarrito(200);
total=agregarCarrito(300);
const totalPagar=calcularImpuesto(total);
console.log(`el impuesto a pagar es de ${totalPagar}`);
console.log(total);