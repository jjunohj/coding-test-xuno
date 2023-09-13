const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let fs = require("fs");
const input = fs.readFileSync(file).toString().trim().split("\n");

const nums = input[1].split(" ").map((e) => parseInt(e));
let cnt = 0;

for (let num of nums) {
  let isDecimal = true;
  if (num >= 2) {
    if (num === 2) {
      cnt += 1;
    } else if (num > 2) {
      for (let i = 2; i < num; i++) {
        if (num % i === 0) {
          isDecimal = false;
        }
      }
      cnt += isDecimal ? 1 : 0;
    }
  } else {
    continue;
  }
}

console.log(cnt);
