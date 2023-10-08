const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const n = parseInt(input[0]);
const consults = input
  .splice(1)
  .map((line) => line.split(" ").map((e) => parseInt(e)));

const solution = (n, consults) => {
  const dp = new Array(n).fill(0);

  for (let i = 0; i < n; i++) {
    const [t, p] = consults[i];
    if (i + t > n) continue;
    dp[i] += p;

    for (let j = i + t; j < n; j++) {
      dp[j] = Math.max(dp[j], dp[i]);
    }
  }

  console.log(Math.max(...dp));
};

solution(n, consults);
