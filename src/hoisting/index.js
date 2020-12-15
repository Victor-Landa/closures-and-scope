a = 2;
var a;
console.log(a); // 2

console.log(a);
var a = 2; // undefined

nameOfDog('Chopper'); // Chopper

function nameOfDog(name) {
  console.log(name);
}

// Caso 1: Antes del hoisting
console.log(nombre); // undefined
var nombre = 'Victor';

// Caso 1: Después del hoisting
var nombre;
console.log(nombre);
nombre = 'Victor';