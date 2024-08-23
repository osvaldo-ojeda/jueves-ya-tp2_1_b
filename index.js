// variables
// console.log(`🚀 ~ nombre:`, nombre)
var nombre = "Osval";
nombre = "Pepe";
var nombre = "Ricky";
// console.log(`🚀 ~ nombre:`, nombre)

// console.log(`🚀 ~ apellido:`, apellido)
let apellido = "Perez";
apellido = "Gomez";
// let apellido="Lopez"
// console.log(`🚀 ~ apellido:`, apellido)

// console.log(`🚀 ~ edad:`, edad)
const edad = 37;
// edad=80
// const edad=20
// console.log(`🚀 ~ edad:`, edad)

// tipos dedatos
// datos primitivos
// String
let str = "12";
// console.log(`🚀 ~ str:`, typeof str);

// Number
let num = 12;
let num2 = 12;
// console.log(`🚀 ~ num:`, typeof num);
// console.log(`🚀 ~ num:`, num===num2);

// Boolean
let bl = true; //false
// console.log(`🚀 ~ bl:`, typeof bl);

// null
let nl = null;
// console.log(`🚀 ~ nl:`, typeof nl);

// undefined
let und;
// console.log(`🚀 ~ und:`, typeof und);

// BigInt
let bg = 6n;
// console.log(`🚀 ~ bg:`,typeof bg)

// Symbol
let symbol1 = Symbol(2);
let symbol2 = Symbol(2);
// console.log(`🚀 ~ symbol1:`,typeof symbol1)
// console.log(`🚀 ~ symbol1:`,symbol1==symbol2)

// datos complejos
// array
const array = [1, 3, "hola", null, ["1", "2"]];
array.push(5);
// array=0
array.push(20);
// console.log(`🚀 ~ array:`, typeof array);
// console.log(`🚀 ~ array:`, array[2]);

// Object literal
const obj = {
  nombre: "Juan",
  apellido: "Perez",
  edad: 30,
};
let fname = "nombre";
// console.log(`🚀 ~ obj:`, obj);
// console.log(`🚀 ~ obj:`, obj["nombre"]);
// console.log(`🚀 ~ obj:`, obj.apellido);
// console.log(`🚀 ~ obj:`, obj[fname]);

// date
const date = Date();
// console.log(`🚀 ~ date:`,typeof date)

const nDate = new Date();
// console.log(`🚀 ~ nDate:`, nDate)
// console.log(`🚀 ~ nDate:`,typeof nDate)

// function

// decirHola()
function decirHola() {
  console.log("hola");
}
// decirHola()

function saludar(nombre) {
  console.log(`Hola ${nombre}, como estas?`);
}
// saludar("ricky")

function sumar(n1, n2) {
  console.log(n1 + n2);
  return n1 + n2;
}

// let resSuma=sumar(3,4)
// console.log(`🚀 ~ resSuma:`, resSuma)

// funcion anonima
// restar(4,2);
const restar = function (n1, n2) {
  console.log(n1 - n2);
};
// restar(4,2);

// arrow functions
const multiplicar = (n1, n2) => n1 * n2;
// console.log(`🚀 ~ multiplicar:`, multiplicar(3,4))

// const multiplicar = (n1, n2) => {
//   return n1 * n2;
// };
// console.log(`🚀 ~ multiplicar:`, multiplicar(3, 4));

// copiar datos

let deporte1 = "tenis";
let deporte2 = deporte1;
// console.log(`🚀 ~ deporte1:`, deporte1 === deporte2);
// deporte2="rugby"
// console.log(`🚀 ~ deporte1:`, deporte1)
// console.log(`🚀 ~ deporte2:`, deporte2)

// copia con datos complejos

const data = {
  nombre: "chayane",
};
const info = data;
// console.log(`🚀 ~ data:`, data===info)
// info.nombre="elmer"
// info.apellido="Perez"
// console.log(`🚀 ~ data:`, data)
// console.log(`🚀 ~ info:`, info)

// copia a mano
const info2 = {
  nombre: data.nombre,
};
// console.log(`🚀 ~ info2:`, info2===data)

// copia spread
const info3={...obj,...data}
// info3.apellido="Fernandez"
console.log(`🚀 ~ data:`, data)
console.log(`🚀 ~ info3:`, info3)
console.log(`🚀 ~ info3:`, info3==data)
