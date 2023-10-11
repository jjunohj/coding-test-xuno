const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const t = parseInt(input[0]);
const numbers = input.splice(1).map((e) => parseInt(e));

const dp = [
  [1, 0],
  [0, 1],
];

for (let i = 2; i <= 40; i++) {
  dp[i] = [dp[i - 2][0] + dp[i - 1][0], dp[i - 2][1] + dp[i - 1][1]];
}

result = "";
numbers.forEach((num) => {
  result += dp[num].join(" ") + "\n";
});

console.log(result);
