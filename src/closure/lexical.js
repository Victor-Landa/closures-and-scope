const buildCount = (i) => {
  let count = i;
  const displayCount = () => {
    console.log(count++); // Imprime el valor actual de count y le suma 1 después de ejecutarlo
  }
  return displayCount;
}

const myCount = buildCount(1);
myCount(); // 1
myCount(); // 2
myCount(); // 3

const myOtherCount = buildCount(10);
myOtherCount(); // 10
myOtherCount(); // 11