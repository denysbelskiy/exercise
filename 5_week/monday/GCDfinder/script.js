// let num1 = numsPrompt(1);
// let num2 = numsPrompt(2);
// let commonDiv = calcGCD(num1, num2);

let num1;
let num2;
let commonDiv;

function numsPrompt(x) {
  let val = false;
  let num;
  while (!val) {
    num = +prompt(`Enter positive number ${x}`);
    if (isNaN(num)) {
      alert("Please, enter correct positive number");
      continue;
    } else if (num >= 0) {
      val = true;
    } else {
      alert("Please, enter correct positive number");
      continue;
    }
  }
  return num;
}

function calcGCD(x, y) {
  let gcd;
  let smaller;
  if (x > y) {
    smaller = y;
  } else {
    smaller = x;
  }
  for (let i = smaller; i >= 1; i--) {
    if (x % i == 0 && y % i == 0) {
      gcd = i;
      break;
    }
  }
  return gcd;
}

function runGcdFinder() {
  num1 = numsPrompt(1);
  num2 = numsPrompt(2);
  commonDiv = calcGCD(num1, num2);
  alert(`GCD of numbers ${num1} and ${num2} is ${commonDiv}`);
}

runGcdFinder();
