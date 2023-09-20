const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let fs = require("fs");
const input = fs.readFileSync(file).toString().trim().split("\n");

const evenNumbers = input.splice(1).map((e) => parseInt(e));

// 에라토스테네스의 체
maxNum = 1000000;
const prime = Array(maxNum + 1).fill(false);
let primeNumbers = [];

for (let i = 2; i < Math.floor(Math.sqrt(maxNum)); i += 1) {
  for (let j = i * 2; j <= maxNum; j += i) {
    prime[j] = true;
  }
}

// console.log(primeNumbers);
const result = [];

evenNumbers.forEach((e) => {
  let cnt = 0;
  for (let i = 2; i <= Math.floor(e / 2); i++) {
    if (!prime[i] && !prime[e - i]) {
      cnt += 1;
    }
  }
  result.push(cnt);
});

console.log(result.join("\n"));
