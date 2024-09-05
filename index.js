const decirHola = require("./funciones/decirHola");
const numeroMayor=require("./funciones/numeroMayor")
const sumaElementos=require("./funciones/sumaElementos")
const abbrevName= require("./funciones/abbrevName");
const filtradaDeArray = require("./funciones/filtradaDeArray");


//  console.log(module)
// console.log(require)

// decirHola();
// numeroMayor([3,6,2])
// sumaElementos([20,3,6,2])
// abbrevName("Ricky Martin")
const estudiantes = [
     { nombre: "Juan", edad: 17, curso: "Primero" },
     { nombre: "Ana", edad: 18, curso: "Segundo" },
     { nombre: "Carlos", edad: 16, curso: "Primero" },
     { nombre: "María", edad: 19, curso: "Tercero" },
   ];
filtradaDeArray(estudiantes)