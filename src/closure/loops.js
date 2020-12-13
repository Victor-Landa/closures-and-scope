const anotherFunction2 = () => {
  var i;
  console.log('Antes del loop', i); // undefined
  for(i = 0; i < 10; i ++) {
    console.log('Dentro del loop', i); // 0 1 2 3 4 5 6 7 8 9
    setTimeout(() => {
      console.log(i); // 10 10 10 10 10 10 10 10 10 10
    }, 1000);
  }
  console.log('After loop', i); // 10
}

anotherFunction2();