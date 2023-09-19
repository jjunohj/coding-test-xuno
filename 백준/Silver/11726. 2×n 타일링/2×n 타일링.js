const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let fs = require("fs");
const input = fs.readFileSync(file).toString().trim();
const n = parseInt(input);

const memo = {
  1: 1,
  2: 2,
};

for (let i = 3; i <= n; i++) {
  memo[i] = (memo[i - 1] + memo[i - 2]) % 10007;
}

console.log(memo[n]);
