const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let fs = require("fs");
const input = fs.readFileSync(file).toString().trim().split("\n");
const n = parseInt(input[0]);
const numbers = input.splice(1).map((e) => parseInt(e));
const max = Math.max(...numbers);

const memo = {
  1: 1,
  2: 2,
  3: 4,
};

for (let i = 4; i <= max; i++) {
  memo[i] = memo[i - 3] + memo[i - 2] + memo[i - 1];
}

numbers.forEach((n) => {
  console.log(memo[n]);
});
