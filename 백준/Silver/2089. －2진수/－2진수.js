const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let fs = require("fs");
const input = fs.readFileSync(file).toString().trim();
const n = parseInt(input);

let tmp = n;
let remainder;
let ans = [];

while (tmp / -2 !== 0) {
  remainder = tmp % -2;
  if (remainder === -1 || remainder === 1) {
    tmp = Math.floor(tmp / -2) + 1;
    ans.push(1);
  } else if (remainder === 0) {
    tmp = Math.floor(tmp / -2);
    ans.push(0);
  }
}

console.log(ans.length === 0 ? 0 : ans.reverse().join(""));
