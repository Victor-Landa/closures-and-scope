const hellowMars = () => {
  const hellow = 'Hellow Mars!';
  console.log(hellow);
}

hellowMars();
console.log(hellow); // ReferenceError: hellow is not defined

var scope = "I'm global";
const functionScope = () => {
  var scope = "I'm just a local";
  const func = () => {
    return scope;
  }
  console.log(func()); // I'm just a local
}

functionScope();
console.log(scope); // I'm global