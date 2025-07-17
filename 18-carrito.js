var total=0;
function agregarCarrito(producto,precio) {
    console.log(`el producto ${producto} se ha agregado al carrito`);
    return total += precio;

    
}

function calcularImpuesto(total) {
    return impuesto=total*1.16;
    
}
total=agregarCarrito('arroz',100);
console.log(total);
total=agregarCarrito('pasta',200);
console.log(total);
total=agregarCarrito('harina',300);
console.log(total);
const totalPagar=calcularImpuesto(total);
console.log(`el impuesto a pagar es de ${totalPagar}`);
console.log(total);