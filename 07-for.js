 let text = "";
 let text2 = "";
for (let x=0; x<=100; x++) {
    console.log("el alumno tiene el codigo igual a esto = " + x) + "<br>";  
}

//*ARRAY */
const alumnos=["Fran", "Pedro", "Maria", "Chris", "Luis"];
for (let i=0; i<alumnos.length; i++) {
    console.log("El alumno esta  " + alumnos[i] + "<br>");  
    text+= "El alumno esta  " + alumnos[i] + "<br>";
}
document.getElementById("alumnos").innerHTML = text;

const frutas=["Tomate", "Peras", "Uvas", "Cambur", "Durazno"];
for (let y=0; y<frutas.length; y++) {
    console.log("Estas son frutas " + frutas[y]); 
    text2+= "esta fruta es muy buena  " + frutas[y] + "<br>"; 
}
document.getElementById("frutas").innerHTML = text2;
console.log(frutas[2]);