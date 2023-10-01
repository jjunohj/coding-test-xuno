const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let fs = require("fs");
const [n, k] = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split(" ")
  .map((e) => parseInt(e));

const rows = n;
const columns = k;

const dp = Array.from(new Array(rows + 1), () =>
  new Array(columns + 1).fill(1)
);

for (let i = 1; i <= rows; i++) {
  for (let j = 1; j <= columns; j++) {
    let sum = 0;
    for (let k = 0; k <= i; k++) {
      sum += dp[k][j - 1];
    }
    dp[i][j] = sum % 1000000000;
  }
}

console.log(dp[rows][columns - 1]);
