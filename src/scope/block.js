const fruits = () => {
  if(true) {
    var fruits1 = 'Orange';
    let fruits2 = 'Cucumber';
    const fruits3 = 'Apple';
    console.log(fruits2);
    console.log(fruits3);
  }
  console.log(fruits1);
}

fruits();


let x = 1; // Valor global
{
  let x = 2;
  console.log(x); // 2
}
console.log(x); // 1

var y = 1;
{
  var y = 2;
  console.log(y); // 2
}
console.log(y); // 2


const anotherFunction = () => {
  for(var i = 0; i < 10; i ++) {
    setTimeout(() => {
      console.log(i);
    }, 1000);
  } 
}

anotherFunction(); // After 1 second => 10 10 10 10 10 10 10 10 10 10

const anotherFunction2 = () => {
  for(let i = 0; i < 10; i ++) {
    setTimeout(() => {
      console.log(i);
    }, 1000);
  } 
}

anotherFunction2(); // After 1 second => 0 1 2 3 4 5 6 7 8 9