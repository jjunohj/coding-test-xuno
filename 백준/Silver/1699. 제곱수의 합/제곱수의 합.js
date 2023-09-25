const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let fs = require("fs");
const input = fs.readFileSync(file).toString().trim();
let n = parseInt(input);

const dp = [];
for (let i = 0; i <= n; i++) {
  dp[i] = i;
}

for (let i = 1; i <= n; i++) {
  for (let j = 1; j ** 2 <= i; j++) {
    dp[i] = Math.min(dp[i], dp[i - j ** 2] + 1);
  }
}

console.log(dp.pop());
