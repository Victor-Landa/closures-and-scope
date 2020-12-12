var hello = 'Hello';
var hello = 'Hello111'; // ✅
let world = 'World';
let world = 'World1111'; // ❌ SyntaxError
const helloWorld = 'Hello World!!';

const anotherFunction = () => {
  console.log(hello); // Hello111
  console.log(world); // World
  console.log(helloWorld); // Hello Worlds!! 
}

anotherFunction();

// Mala práctica
const helloWorld = () => {
  globalVar = 'Im global';
}

helloWorld();
console.log(globalVar);