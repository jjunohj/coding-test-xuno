const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let fs = require("fs");
const input = fs.readFileSync(file).toString().trim().split("\n");

let n = parseInt(input[0]);
let ropes = input
  .slice(1)
  .map((v) => parseInt(v))
  .sort((a, b) => b - a);

let max = 0;
for (let i = 0; i < n; i++) {
  max = Math.max(max, parseInt(ropes[i] * (i + 1)));
}

console.log(max);
