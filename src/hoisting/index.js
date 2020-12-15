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

// Caso 2: Function antes del hoisting
function filtrarProductos(productos) {
  var productosConOferta = [];
  for(var i = 0; i < productos.length; i++) {
    var producto = productos[i];
    if(producto.tieneDescuento) {
      var descuento = producto.descuento;
      if(descuento > 25) {
        productosConOferta.push(producto);
      }
    }
  }
  return productosConOferta;
}

// Caso 2: Function después del hoisting
function filtrarProductos(productos) {
  var productosConOferta;
  var i;
  var producto;
  var descuento;

  productosConOferta = [];
  for(i = 0; i < productos.length; i++) {
    producto = productos[i];
    if(producto.tieneDescuento) {
      descuento = producto.descuento;
      if(descuento > 25) {
        productosConOferta.push(producto);
      }
    }
  }

  return productosConOferta;
}

// Caso 3: Function declaration antes del hoisting
saludar('Victor');

function saludar(nombre) {
  console.log('Hola' + nombre);
}

// Caso 3: Function declaration después del hoisting
function saludar(nombre) {
  console.log('Hola' + nombre);
}

saludar('Victor');

// Caso 3.1: Función como expresión en lugar de declaración antes del hoisting
saludar('Victor');

var saludar = function saludar(nombre) {
  console.log('Hola' + nombre);
}

// Caso 3.1: Función como expresión en lugar de declaración después del hoisting
var saludar;
saludar('Victor'); // TypeError: saludar is not a function

saludar = function saludar(nombre) {
  console.log('Hola' + nombre);
}