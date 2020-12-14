var a = 'Mars';

function mars() {
  let b = 'Hello Mars!';
  const c = 'Hello Mars!!';
  if(true) {
    let d = 'Hello Mars!!!';
    debugger;
  }
}

mars();

const moneyBox = () => {
  debugger;
  var saveCoins = 0;
  const countCoins = (coins) => {
    debugger;
    saveCoins += coins;
    console.log(`MoneyBox: $${saveCoins}`);
  }
  return countCoins;
}

let myMoneyBox = moneyBox();
myMoneyBox(4);
myMoneyBox(10);
myMoneyBox(20);