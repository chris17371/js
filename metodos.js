const reproductor ={
    reproducir: function (id) {
        console.log(`Reproduciendo canción ID: ${id}`);},
    pausar: function () {
        console.log(`Pausando...`);},
    borrar: function (id) {
        console.log(`Borrando canción ID: ${id}`);},
    crearPlaylist: function (nombre) {
        console.log(`Creando la playlist: ${nombre}`);},
    reproducirPlaylist: function (nombre) {
        console.log(`Reproduciendo la playlist: ${nombre}`);}
}
reproductor.reproducir(30);
reproductor.pausar();
reproductor.crearPlaylist('romanticas');
reproductor.reproducirPlaylist('romanticas');

const carro ={
    vehiculo: function (modelo) {
        console.log(`Voy a manejar el carro ${modelo}`);},
    prender: function () {
        console.log(`Prendiendo...`);},
    acelerar: function (velocidad) {
        console.log(`El carro va a una velocidad de ${velocidad}`);},
    frenar: function () {
        console.log(`El carro esta frenando...`);},
    apagar: function () {
        console.log(`El carro ahora esta apagado`);}
}
carro.vehiculo('Toyota');
carro.prender();
carro.acelerar(80);
carro.frenar();
carro.apagar();
    