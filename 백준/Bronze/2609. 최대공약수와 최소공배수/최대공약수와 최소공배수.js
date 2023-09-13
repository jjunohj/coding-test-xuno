const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let fs = require("fs");
const input = fs.readFileSync(file).toString().trim().split("\n");

const num = input[0].split(" ").map((e) => parseInt(e));
[a, b] = [...num];

function getGCD(num1, num2) {
  let gcd = 1;

  for (let i = 2; i <= Math.min(num1, num2); i++) {
    if (num1 % i === 0 && num2 % i === 0) {
      gcd = i;
    }
  }
  return gcd;
}

function getLCM(num1, num2) {
  let lcm = getGCD(num1, num2);
  let gcd = getGCD(num1, num2);
  while (true) {
    if (lcm % num1 === 0 && lcm % num2 === 0) {
      break;
    }
    lcm += gcd;
  }
  return lcm;
}

console.log(getGCD(a, b), getLCM(a, b));
