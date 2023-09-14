const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let fs = require("fs");
const input = fs.readFileSync(file).toString().trim();
const n = parseInt(input);

function factorial(num) {
  if (num === 0 || num === 1) return 1;

  if (num >= 2) {
    return num * factorial(num - 1);
  }
}

console.log(factorial(n));
