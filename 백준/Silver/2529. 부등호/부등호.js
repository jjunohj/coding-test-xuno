const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const k = parseInt(input[0]);
const signs = input[1].split(" ");
const picked = new Array(11).fill(false);

let ans = [];
const numString = new Array(k + 1);

function checkCorrect(prev, cnt, numString) {
  if (cnt === k + 1) {
    ans.push(numString.join(""));
    return;
  } else {
    if (signs[cnt - 1] === ">") {
      for (let i = prev - 1; i >= 0; i--) {
        if (!picked[i]) {
          numString[cnt] = i;
          picked[i] = true;
          checkCorrect(i, cnt + 1, numString);
          picked[i] = false;
        }
      }
    } else {
      for (let i = prev + 1; i < 10; i++) {
        if (!picked[i]) {
          numString[cnt] = i;
          picked[i] = true;
          checkCorrect(i, cnt + 1, numString);
          picked[i] = false;
        }
      }
    }
  }
}

for (let i = 0; i < 10; i++) {
  picked[i] = true;
  numString[0] = i;
  checkCorrect(i, 1, numString);
  picked[i] = false;
}

ans = ans.sort((a, b) => a - b);
console.log(ans[ans.length - 1]);
console.log(ans[0]);
