let text="";
let num1= parseInt(prompt("Ingrese el primer número:"));
let num2= parseInt(prompt("Ingrese el segundo número:"));
let texto="";
let resultado= num1+num2;
text ="El resultado de la suma es " + resultado + "<br>";

while(resultado<=100){
    console.log(resultado);
    text += "el numero a imprimir es " + resultado + "<br>";
    resultado++;
}
document.getElementById("text").innerHTML = text;
document.getElementById("resul").innerHTML = texto;