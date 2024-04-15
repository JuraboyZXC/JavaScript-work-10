// Homework 1
let age = +prompt("How old are you?");
function a(good, goodBye, youStupid) {
  if (age > 18) {
    console.log(good);
  }
  if (age <= 18 && age >= 0) {
    console.log(goodBye);
  }
  if (age < 0) {
    console.log(youStupid);
  }
}
a("Good", "Good Bye", "You are Stupid?");


// Homework 2
let numberOne = +prompt("Write the first number");
let numberTwo = +prompt("Write the second number");
function n(toAdd, subtraction, increase, toBe, degree, percent) {
  console.log(toAdd, numberOne + numberTwo);
  console.log(subtraction, numberOne - numberTwo);
  console.log(increase, numberOne * numberTwo);
  console.log(toBe, numberOne / numberTwo);
  console.log(degree, numberOne ** numberTwo);
  console.log(percent, numberOne % numberTwo);
}
n("+:", "-:", "*:", "/:", "**:", "%:");


// Homework 3
function maxName(name1, name2, name3) {
  let names = [name1, name2, name3];
  let longestName = names.reduce((prev, current) => (current.length > prev.length) ? current : prev, '');
  return longestName;
}

console.log(maxName('Hachi', 'Maestro', 'Bit',));