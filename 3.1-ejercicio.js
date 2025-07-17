// JUAN Y PEDRO VENDEN TOMATES,JUAN VENDIO 500KILOS Y PEDRO 650
//CUANTOS KILOS DE TOMATES VENDIERON EN TOTAL
// CADA KILO DE TOMATE CUESTA bs 25
//1 CUANTOS KILOS DE TOMATE VENDIERON EN TOTAL
//CUANTO DINERO GANARON EN TOTAL
//CUANTO DINERO GANARON CADA UNO

var juan =500;
var pedro = 650;
var kgTomate = 25;

//1 CUANTOS KILOS DE TOMATE VENDIERON EN TOTAL
var totalKilos = juan + pedro;
console.log("Juan y pedro vendieron en total " + totalKilos + " kilos de tomate.");
//CUANTO DINERO GANARON EN TOTAL
var dineroJuan = juan * kgTomate;
console.log("Juan gano " + dineroJuan + " bs.");
var dineroPedro = pedro * kgTomate;
console.log("Pedro gano " + dineroPedro + " bs.");
var totalDinero = dineroJuan + dineroPedro;
console.log("En total ganaron " + totalDinero + " bs.");