let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let [n, k] = input[0].split(" ");
let coins = input.slice(1).map((el) => parseInt(el));
let answer = 0;
coins.sort((a, b) => b - a);

while (k !== 0) {
  for (let c of coins) {
    if (c <= k) {
      answer += Math.floor(k / c);
      k %= c;
    }
  }
}

console.log(answer);
