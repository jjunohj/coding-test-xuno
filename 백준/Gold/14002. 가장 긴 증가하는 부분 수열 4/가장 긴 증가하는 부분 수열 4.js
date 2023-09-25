const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let fs = require("fs");
const input = fs.readFileSync(file).toString().trim().split("\n");
const n = parseInt(input[0]);
const numArr = input[1].split(" ").map((e) => parseInt(e));

const dp = {};

for (let i = 0; i < n; i++) {
  dp[i] = [1, numArr[i].toString()];
}

for (let i = 1; i < n; i++) {
  for (let j = 0; j < i; j++) {
    if (numArr[j] < numArr[i]) {
      if (dp[j][0] + 1 > dp[i][0]) {
        dp[i] = [dp[j][0] + 1, dp[j][1].concat(" ", numArr[i].toString())];
      }
    }
  }
}

let maxLen = 1;

Object.values(dp).forEach((e) => {
  maxLen = Math.max(maxLen, e[0]);
});

for (let v of Object.values(dp)) {
  if (v[1].split(" ").length === maxLen) {
    console.log(maxLen);
    console.log(v[1]);
    break;
  }
}
