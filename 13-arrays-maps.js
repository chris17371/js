const carrito = [
    { nombre: 'Monitor 20 pulgadas', precio: 500 },
    { nombre: 'Televisión 50 pulgadas', precio: 700 },
    { nombre: 'Tablet', precio: 300 },
    { nombre: 'Audífonos', precio: 200 },
    { nombre: 'Teclado', precio: 50 },
    { nombre: 'Celular', precio: 500 }
];
const nuevoArray = carrito.map(producto => `Articulo: ${producto.nombre}, Precio: ${producto.precio}`);


const nuevoArray2 = carrito.forEach(producto => {
    console.log(`Articulo: ${producto.nombre}, Precio: $${producto.precio}`);
});

console.log(nuevoArray);
console.log(nuevoArray2);

const num=3;
const num2=4;
const multiplicadores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const tablaDos = multiplicadores.map(multiplicadores => `El resultado de multiplicar 3 por ${multiplicadores} es igual a = ${num*multiplicadores}`);
console.log(tablaDos);
const tablaTres = multiplicadores.forEach(multiplicadores =>  console.log (`El resultado de multiplicar 3 por ${multiplicadores} es igual a = ${num*multiplicadores}`));
console.log(tablaTres);