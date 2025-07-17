const curso= {
    nombre:"programacion",
    duracion: "36 horas",
    profesor:"jenny rojas",
    informacion:{modulos:15,
        modalidad:{
            precencial:true,
            online:true
        }
    }
        
}
console.log(curso);
console.log(curso.nombre);
const telefono={
    marca:"Iphone",
    modelo:"12",
    bateria:"100%",
    masInfo:{     
        origen:{
        nuevo:true,
        usado:true
            }
        }
    
    }
console.log(telefono);
const{marca, masInfo:{origen:{nuevo}}} = telefono;
console.log(telefono.modelo);

const{masInfo:{origen}}=telefono

const carro={
    empresa:"toyota",
    modelo:"corolla",
    año:"2005",
    ubicacion:"maracay",
    detalles:{
        kilometros:"111.111",
        tcaja:{
            svt:true,
            aut:true
        }
    }
}

carro.descripcion=`esta a muy buen precio`
console.log(carro)
const{empresa,modelo,año,detalles:{kilometros,tcaja:{svt}}}=carro
    