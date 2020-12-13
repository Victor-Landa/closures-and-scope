const moneyBox = (coins) => {
  var saveCoins = 0;
  saveCoins += coins; // Operación de asignación de adición
  console.log(`MoneyBox: $${saveCoins}`);
}

moneyBox(10); // MoneyBox: $10
moneyBox(20); // MoneyBox: $20

const moneyBox = () => {
  var saveCoins = 0;
  const countCoins = (coins) => {
    saveCoins += coins;
    console.log(`MoneyBox: $${saveCoins}`);
  }
  return countCoins;
}

let myMoneyBox = moneyBox();
myMoneyBox(4); // 4
myMoneyBox(10); // 14
myMoneyBox(20); // 34