const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let fs = require("fs");
const input = fs.readFileSync(file).toString().trim().split("\n");

let n = parseInt(input[0]);
let A = input[1]
  .split(" ")
  .map((v) => parseInt(v))
  .sort((a, b) => a - b);

let answer = 0;

for (let i = 0; i < n; i++) {
  answer += (n - i) * A[i];
}

console.log(answer);
