'user strict';
let suma="";
let multi="";
let divi="";
let resta="";


/*porConsola(15, 20);*/

function carros(marca,año) {
    console.log("Me quiero compar un carro de la marca " + marca,año);

}

carros("Toyota","");


function porConsola(n1,n2) {
    console.log("la suma de dos números es: " + (n1 + n2));
    console.log("la multiplicación de dos números es: " + (n1 * n2));
    console.log("la división de dos números es: " + (n1 / n2));
    console.log("la resta de dos números es: " + (n1 - n2));
}
function porPantalla(n1,n2) {
    suma+=("la suma de dos números es: " + (n1 + n2));
    document.getElementById("suma").innerHTML = suma;

    multi+=("la multiplicación de dos números es: " + (n1 * n2));
    document.getElementById("multi").innerHTML = multi;

    divi+=("la división de dos números es: " + (n1 / n2));
    document.getElementById("divi").innerHTML = divi;

    resta+=("la resta de dos números es: " + (n1 - n2));
    document.getElementById("resta").innerHTML = resta;
    
}
/*porPantalla(20, 90);*/

function calculadora(n1,n2,mostrar=false) {

    if (mostrar==false) {
        porConsola(n1,n2);
        
    }else {
        porPantalla(n1,n2);
    }
    return true;
    
}


calculadora(10,5,false)

