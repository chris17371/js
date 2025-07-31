let pendiente=[ 'Tarea', 'Comer', 'Proyecto', 'Estudiar JavaScript' ];

for (let pendiente of pendiente) {
    console.log(pendiente);
}
let viajes= [  'Italia','Roma', 'Rusia', 'margarita','tachira' ];
for (let viaje of viaje) {
    console.log(viaje);
}

// Recorriendo un objecto con for...of
 const carrito =[
    {id:1, producto: 'Libro'},
    {id:2, producto: 'Camisa'},
    {id:3, producto: 'Guitarra' }
 ];
 for (let producto of carrito) {
    console.log(producto.producto);
 }

 let automovile = {
    modelo: 'Camaro',
    motor: '6.0',
    anio: 1969,
    marca: 'Chevrolet'
 };
for (let auto in automovile) {
    console.log( `${Auto} : ${automovile[auto]}` );
}

 let gym = [
    {entrenador: 'Raul',
    especialidad: 'Musculacion',
    sucursal: 'Centro',
    edad: 35},
    {entrenador: 'Ana',
    especialidad: 'Yoga',
    sucursal: 'Limon',
    edad: 25}
    
 ] ;
for (let trainer of gym) {
    console.log( `${gym.entrenador}` );
}

       

