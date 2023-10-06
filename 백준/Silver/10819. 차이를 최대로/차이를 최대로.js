const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [n, numbers] = [
  parseInt(input[0]),
  [...input[1].split(" ").map((e) => parseInt(e))],
];
const picked = new Array(n).fill(false);
const line = new Array(n);
let ans = -800;

const backTrack = (k) => {
  if (k === n) {
    let sum = 0;
    for (let i = 0; i < n - 1; i++) {
      sum += Math.abs(line[i] - line[i + 1]);
    }
    ans = Math.max(ans, sum);
  } else {
    for (let i = 0; i < n; i++) {
      if (!picked[i]) {
        picked[i] = true;
        line[k] = numbers[i];
        backTrack(k + 1);
        picked[i] = false;
      }
    }
  }
};

backTrack(0);
console.log(ans);
