const estudiantes={
    nombre:"Juan Perez",
    edad:20,
    notas:[8, 9, 10],
    saludar: function() {
        console.log(`Hola,mi nombre es ${this.nombre}`);
    }
}

estudiantes.saludar();

const calculadora={
    numero1:20,
    numero2:20,
    calcular: function() {

        console.log(`La suma es: ${this.numero1 + this.numero2}`);
    }
}

calculadora.calcular();