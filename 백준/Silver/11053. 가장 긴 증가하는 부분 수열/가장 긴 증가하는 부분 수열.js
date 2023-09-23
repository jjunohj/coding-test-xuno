const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let fs = require("fs");
const input = fs.readFileSync(file).toString().trim().split("\n");
const n = parseInt(input[0]);

const numbers = input[1].split(" ").map((e) => parseInt(e));
// 0 ~ n-1

const dp = new Array(n).fill(1);

for (let i = 1; i < n; i++) {
  let dpMax = 1;
  for (let j = 0; j < i; j++) {
    if (numbers[i] > numbers[j]) {
      dpMax = Math.max(dpMax, dp[j] + 1);
    }
  }
  dp[i] = dpMax;
}

console.log(Math.max(...dp));
