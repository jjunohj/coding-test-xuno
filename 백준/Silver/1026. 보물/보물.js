const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let fs = require("fs");
const input = fs.readFileSync(file).toString().trim().split("\n");

let n = parseInt(input[0]);
let A = input[1]
  .split(" ")
  .map((v) => parseInt(v))
  .sort((a, b) => a - b);
let B = input[2]
  .split(" ")
  .map((v) => parseInt(v))
  .sort((a, b) => b - a);

let answer = 0;

for (let i = 0; i < n; i++) {
  answer += A[i] * B[i];
}

console.log(answer);
