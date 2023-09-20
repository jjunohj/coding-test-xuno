const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let fs = require("fs");
const input = fs.readFileSync(file).toString().trim().split("\n");

const numbersArray = input
  .splice(1)
  .map((e) => e.split(" "))
  .map((v) => v.splice(1).map((n) => parseInt(n)));

function getDivisor(num) {
  const divisors = new Set();
  for (let i = 1; i <= Math.ceil(num / 2); i++) {
    if (num % i === 0) {
      divisors.add(i);
      divisors.add(num / i);
    }
  }
  return Array.from(divisors);
}

let result = [];

numbersArray.forEach((numbers) => {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    divisors = getDivisor(numbers[i]).sort((a, b) => b - a);
    for (let j = i + 1; j < numbers.length; j++) {
      for (let divisor of divisors) {
        if (numbers[j] % divisor === 0) {
          sum += divisor;
          break;
        }
      }
    }
  }
  result.push(sum);
});

console.log(result.join("\n"));
