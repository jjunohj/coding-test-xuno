const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let fs = require("fs");
const input = fs.readFileSync(file).toString().trim().split("\n");
const n = parseInt(input[0]);
const prices = input[1].split(" ").map((e) => parseInt(e));

const dp = {
  1: prices[0],
};

for (let i = 2; i <= n; i++) {
  let min = prices[i - 1]; // N팩 + 0개 경우의 수
  for (let j = 1; j < i; j++) {
    // N-1팩 + 1개 경우의 수 ... 1팩 + N-1개 경우의 수
    min = Math.min(prices[i - j - 1] + dp[j], min);
  }
  dp[i] = min;
}

console.log(dp[n]);
