const fruits = () => {
  var fruit = 'Apple';
  console.log(fruit);
}

fruits();
console.log(fruit); // ReferenceError: fruit is not defined

const anotherFunction = () => {
  var x = 1;
  var x = 2;
  let y = 1;
  // let y = 2; // SyntaxError: Identifier 'y' has already been declared
  console.log(x); // 2
  console.log(y); // 1
}

anotherFunction();