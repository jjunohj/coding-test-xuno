const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let fs = require("fs");
const input = fs.readFileSync(file).toString().trim().split("\n");
const n = parseInt(input[0]);
const numArr = input[1].split(" ").map((e) => parseInt(e));

const dp = new Array(n);
dp[0] = numArr[0];

for (let i = 1; i < n; i++) {
  maxNum = Math.max(dp[i - 1] + numArr[i], numArr[i]);
  dp[i] = maxNum;
}

console.log(Math.max(...dp));
