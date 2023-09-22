const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let fs = require("fs");
const input = fs.readFileSync(file).toString().trim();
const n = parseInt(input);

const dp = {
  1: [0, 1],
};

for (let i = 2; i <= n; i++) {
  dp[i] = [BigInt(dp[i - 1][0] + dp[i - 1][1]), BigInt(dp[i - 1][0])];
}

console.log(String(dp[n][0] + dp[n][1]));
