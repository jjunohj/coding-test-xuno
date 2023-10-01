const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const len = input[0].length;
const goal = parseInt(input[0]);
const brokenNum = input[2] ? input[2].split(" ") : [];

let cnt = Math.abs(goal - 100);

for (let i = 0; i < 1000000; i++) {
  const numString = i.toString();
  let isValid = true;
  for (let j = 0; j < numString.length; j++) {
    if (brokenNum.includes(numString[j])) {
      isValid = false;
      break;
    }
  }
  if (isValid) {
    cnt = Math.min(cnt, Math.abs(goal - i) + numString.length);
  }
}

console.log(cnt);
