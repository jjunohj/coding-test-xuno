const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let fs = require("fs");
const input = fs.readFileSync(file).toString().trim();
let n = parseInt(input);

let cnt = 0;

while (n >= 5) {
  cnt += parseInt(n / 5);
  n = parseInt(n / 5);
}

console.log(cnt);
