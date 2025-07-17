iniciaraApp();
function iniciaraApp() {
    console.log("Iniciando App...");
    segundaFuncion();
}
function segundaFuncion() {
    console.log("Desde la segunda función...");
    usuarioAutenticado('Juan');
}
function usuarioAutenticado(usuario) {
    console.log('Autenticando usuario...');
    console.log(`Usuario autenticado con exito ${usuario}`);
    
}