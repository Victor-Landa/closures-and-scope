const person = () => {
  var saveName = "Name";
  return {
    getName: () => {
      return saveName;
    },
    setName: (name) => {
      saveName = name;
    }
  }
}

newPerson = person();
console.log(newPerson.getName()); // Name
newPerson.setName('Victor');
console.log(newPerson.getName()); // Victor