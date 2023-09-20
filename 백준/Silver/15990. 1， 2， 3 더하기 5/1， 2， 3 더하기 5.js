const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let fs = require("fs");
const input = fs.readFileSync(file).toString().trim().split("\n");
const n = parseInt(input[0]);
const integers = input.splice(1).map((e) => parseInt(e));
const maximum = Math.max(...integers);

const dp = {
  0: [0, 0, 0],
  1: [1, 0, 0],
  2: [0, 1, 0],
  3: [1, 1, 1],
};

for (let i = 4; i <= maximum; i++) {
  dp[i] = [
    (dp[i - 1][1] % 1000000009) + (dp[i - 1][2] % 1000000009),
    (dp[i - 2][0] % 1000000009) + (dp[i - 2][2] % 1000000009),
    (dp[i - 3][0] % 1000000009) + (dp[i - 3][1] % 1000000009),
  ];
}

integers.forEach((num) => {
  console.log(
    dp[num].reduce((prev, cur) => {
      return (prev + cur) % 1000000009;
    })
  );
});
